// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// fn main() {
//   app_lib::run();
// }

use tauri::{AboutMetadata, CustomMenuItem, Manager, Menu, MenuEntry, MenuItem, Submenu};
use tauri::api::dialog;
use serde_json::json;
use std::sync::Mutex;

#[derive(Default)]
struct AppState {
    unsaved_changes: Mutex<bool>,
}

fn main() {
    // Build the application menu
    let save_menu = CustomMenuItem::new("save", "Save");
    let file_menu = Submenu::new(
        "File",
        Menu::new()
            .add_item(save_menu)
            .add_native_item(MenuItem::Quit),
    );
    let menu = Menu::new().add_submenu(file_menu);

    tauri::Builder::default()
        .manage(AppState::default())
        .menu(menu)
        .on_menu_event(|event| {
            match event.menu_item_id() {
                "save" => {
                    // Handle the "Save" action here
                    println!("Save clicked");
                }
                _ => {}
            }
        })
        .setup(|app| {
            let app_handle = app.handle();
            let main_window = tauri::WindowBuilder::new(
                app,
                "main",
                tauri::WindowUrl::App("index.html".into()),
            )
            .title("OpenHome")
            .inner_size(1200.0, 720.0)
            .resizable(true)
            .build()?;

            main_window.listen("unsaved_changes", move |event| {
                if let Some(changes) = event.payload() {
                    let state = app_handle.state::<AppState>();
                    let mut unsaved_changes = state.unsaved_changes.lock().unwrap();
                    *unsaved_changes = changes == "true";
                }
            });

            // Additional setup logic
            initialize_folders();
            migrate_all();
            init_listeners(app_handle.clone());

            Ok(())
        })
        .on_window_event(|event| match event.event() {
            tauri::WindowEvent::CloseRequested { api, .. } => {
                let state = event.window().state::<AppState>();
                let unsaved_changes = *state.unsaved_changes.lock().unwrap();
                if unsaved_changes {
                    api.prevent_close();
                    dialog::message(
                        Some(event.window()),
                        "Unsaved Changes",
                        "You have unsaved changes. Save changes before exiting?",
                    );
                }
            }
            _ => {}
        })
        .invoke_handler(tauri::generate_handler![
            save_changes,
            get_version_info,
            get_platform,
            open_directory,
            set_unsaved_changes
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

fn initialize_folders() {
    println!("Initializing folders...");
    // Add folder initialization logic here
}

fn migrate_all() {
    println!("Migrating storage...");
    // Add storage migration logic here
}

fn init_listeners(app_handle: tauri::AppHandle) {
    println!("Initializing listeners...");
    // Add IPC command registration here
}

#[tauri::command]
fn save_changes() -> Result<(), String> {
    // Save changes implementation
    println!("Saving changes...");
    Ok(())
}

#[tauri::command]
fn get_version_info() -> serde_json::Value {
    // Simulate fetching version info
    json!({
        "version": "1.0.0",
        "build_date": "2024-11-24"
    })
}

#[tauri::command]
fn set_unsaved_changes(state: tauri::State<AppState>, has_changes: bool) {
    let mut unsaved_changes = state.unsaved_changes.lock().unwrap();
    *unsaved_changes = has_changes;
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
        "linux" => "Linux",
        "macos" => "macOS",
        "windows" => "Windows",
        _ => "Unknown".to_string(),
    }
}


