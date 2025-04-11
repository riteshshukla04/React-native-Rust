# React Native Turbo Modules with Rust

This is an experimental project exploring the integration of Rust-based Turbo Modules in React Native.

### Current Progress
- Got Rust integration working, but with some limitations

<img width="342" alt="image" src="https://github.com/user-attachments/assets/45d5e15a-5ccf-4b35-9468-87908fa7d2b9" />

JS->Java->Rust (Multiply happens in Rust)
## Issue
I am not super happy the way this works. I imagined bridging through  100% cpp but was not able to do through cpp due to turbo modules enforcing errors. Had to bridge through java. 
