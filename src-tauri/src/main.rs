// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

mod window_style;

#[cfg(target_os = "linux")]
use {std::fs::metadata, std::path::PathBuf};
use tauri::Manager;

fn main() {
  tauri::Builder::default()
  .setup(|app| {
    let window = app.get_window("main").unwrap();
    // window.open_devtools();

    #[cfg(any(windows, target_os = "macos"))]
      window_style::set_window_styles(&window).unwrap();
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
