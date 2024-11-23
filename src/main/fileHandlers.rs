#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use serde::{Deserialize, Serialize};
use std::fs;
use std::io::{ErrorKind, Read, Write};
use std::path::{Path, PathBuf};
use tauri::{api::path, command};

#[derive(Serialize, Deserialize, Debug)]
struct FileMetadata {
    created: Option<u64>,
    modified: Option<u64>,
}

// Command to initialize folders
#[command]
fn initialize_folders() -> Result<(), String> {
    let app_data_path = path::app_dir().ok_or("Failed to get app data path")?;
    let mons_dir = Path::new(&app_data_path).join("OpenHome/storage/mons");

    if !mons_dir.exists() {
        fs::create_dir_all(&mons_dir).map_err(|e| format!("Failed to create directory: {}", e))?;
    }

    Ok(())
}

// Command to check if a file can be opened
#[command]
fn file_can_open(file_path: String) -> bool {
    Path::new(&file_path).exists()
}

// Command to get the last modified time of a file
#[command]
fn file_last_modified(file_path: String) -> Result<Option<u64>, String> {
    match fs::metadata(&file_path) {
        Ok(metadata) => Ok(metadata
            .modified()
            .ok()
            .map(|time| time.elapsed().unwrap().as_secs())),
        Err(_) => Ok(None),
    }
}

// Command to get the file's creation date
#[command]
fn get_file_created_date(file_path: String) -> Result<u64, String> {
    match fs::metadata(&file_path) {
        Ok(metadata) => match metadata.created() {
            Ok(created_time) => Ok(created_time
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap()
                .as_secs()),
            Err(_) => Err("Failed to get created date".to_string()),
        },
        Err(_) => Err("File does not exist".to_string()),
    }
}

// Command to read bytes from a file
#[command]
fn read_bytes_from_file(file_path: String) -> Result<Vec<u8>, String> {
    let mut file = fs::File::open(&file_path).map_err(|e| format!("Failed to open file: {}", e))?;
    let mut buffer = Vec::new();
    file.read_to_end(&mut buffer)
        .map_err(|e| format!("Failed to read file: {}", e))?;
    Ok(buffer)
}

// Command to select a file (integrated via frontend)
#[command]
fn select_file() -> Result<PathBuf, String> {
    Ok(path::app_dir().ok_or("Failed to get app directory")?)
}

// Command to write bytes to a file
#[command]
fn write_bytes_to_file(file_path: String, data: Vec<u8>) -> Result<(), String> {
    let mut file = fs::File::create(&file_path).map_err(|e| format!("Failed to create file: {}", e))?;
    file.write_all(&data)
        .map_err(|e| format!("Failed to write to file: {}", e))?;
    Ok(())
}

// Command to load a stored object from a file (JSON)
#[command]
fn load_stored_object(file_path: String) -> Result<serde_json::Value, String> {
    let content = fs::read_to_string(&file_path).map_err(|e| format!("Failed to read file: {}", e))?;
    serde_json::from_str(&content).map_err(|e| format!("Failed to parse JSON: {}", e))
}

// Command to save an object to a file (JSON)
#[command]
fn save_stored_object(file_path: String, data: serde_json::Value) -> Result<(), String> {
    let json = serde_json::to_string_pretty(&data).map_err(|e| format!("Failed to serialize JSON: {}", e))?;
    fs::write(&file_path, json).map_err(|e| format!("Failed to write file: {}", e))?;
    Ok(())
}

// Command to open a directory (system command)
#[command]
fn open_directory(directory: String) -> Result<(), String> {
    let command = match std::env::consts::OS {
        "linux" => "xdg-open",
        "macos" => "open",
        "windows" => "explorer",
        _ => return Err("Unsupported platform".to_string()),
    };

    std::process::Command::new(command)
        .arg(&directory)
        .spawn()
        .map_err(|e| format!("Failed to open directory: {}", e))?;

    Ok(())
}

// Tauri entry point
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            initialize_folders,
            file_can_open,
            file_last_modified,
            get_file_created_date,
            read_bytes_from_file,
            write_bytes_to_file,
            load_stored_object,
            save_stored_object,
            open_directory,
        ])
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}
