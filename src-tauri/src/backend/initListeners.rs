use serde::{Deserialize, Serialize};
use std::fs;
use std::io;
use std::path::{Path, PathBuf};
use std::sync::Mutex;
use tauri::{Manager, State};
use std::time::{SystemTime, UNIX_EPOCH};

#[derive(Default)]
struct AppState {
    open_transaction: Mutex<bool>,
    temp_files: Mutex<Vec<String>>,
}

#[derive(Serialize, Deserialize)]
struct PathData {
    raw: String,
    separator: String,
}

#[derive(Serialize, Deserialize)]
struct LoadSaveResponse {
    path: PathData,
    file_bytes: Vec<u8>,
    created_date: Option<u128>,
}

#[tauri::command]
fn start_transaction(state: State<AppState>) -> Result<(), String> {
    let mut open_transaction = state.open_transaction.lock().unwrap();
    *open_transaction = true;
    Ok(())
}

#[tauri::command]
fn commit_transaction(state: State<AppState>) -> Result<(), String> {
    let mut open_transaction = state.open_transaction.lock().unwrap();
    let temp_files = state.temp_files.lock().unwrap();

    if !*open_transaction {
        return Err("No open transaction".to_string());
    }

    *open_transaction = false;
    let mut errors = Vec::new();
    for filename in temp_files.iter() {
        if let Err(e) = fs::rename(filename, &filename[..filename.len() - 4]) {
            errors.push(format!("{}: {}", filename, e));
        }
    }
    if !errors.is_empty() {
        return Err(errors.join("\n"));
    }
    Ok(())
}

#[tauri::command]
fn rollback_transaction(state: State<AppState>) -> Result<(), String> {
    let mut open_transaction = state.open_transaction.lock().unwrap();
    let temp_files = state.temp_files.lock().unwrap();

    *open_transaction = false;
    let mut errors = Vec::new();
    for filename in temp_files.iter() {
        if let Err(e) = fs::remove_file(filename) {
            errors.push(format!("{}: {}", filename, e));
        }
    }
    if !errors.is_empty() {
        return Err(errors.join("\n"));
    }
    Ok(())
}

#[tauri::command]
fn write_file(
    state: State<AppState>,
    path: String,
    data: Vec<u8>,
) -> Result<(), String> {
    let open_transaction = state.open_transaction.lock().unwrap();

    let file_path = if *open_transaction {
        format!("{}.tmp", path)
    } else {
        path.clone()
    };

    match fs::write(&file_path, data) {
        Ok(_) => {
            if *open_transaction {
                state.temp_files.lock().unwrap().push(file_path);
            }
            Ok(())
        }
        Err(e) => Err(format!("Error writing file: {}", e)),
    }
}

#[tauri::command]
fn read_file(path: String) -> Result<Vec<u8>, String> {
    fs::read(path).map_err(|e| format!("Error reading file: {}", e))
}

#[tauri::command]
fn get_file_created_date(path: String) -> Result<Option<u128>, String> {
    match fs::metadata(&path) {
        Ok(metadata) => match metadata.created() {
            Ok(created_time) => Ok(created_time
                .duration_since(UNIX_EPOCH)
                .map(|d| d.as_millis())
                .ok()),
            Err(_) => Ok(None),
        },
        Err(e) => Err(format!("Error getting metadata: {}", e)),
    }
}

#[tauri::command]
fn open_directory(directory: String) -> Result<(), String> {
    let command = match std::env::consts::OS {
        "linux" => "xdg-open",
        "macos" => "open",
        "windows" => "explorer",
        _ => return Err("Unsupported platform".to_string()),
    };

    std::process::Command::new(command)
        .arg(directory)
        .spawn()
        .map_err(|e| format!("Error opening directory: {}", e))?;
    Ok(())
}

#[tauri::command]
fn get_platform() -> String {
    match std::env::consts::OS {
        "linux" => "linux",
        "macos" => "macos",
        "windows" => "windows",
        _ => "unknown".to_string(),
    }
}

fn main() {
    tauri::Builder::default()
        .manage(AppState::default())
        .invoke_handler(tauri::generate_handler![
            start_transaction,
            commit_transaction,
            rollback_transaction,
            write_file,
            read_file,
            get_file_created_date,
            open_directory,
            get_platform
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
