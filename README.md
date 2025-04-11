# React Native Turbo Modules with Rust

This is an experimental project exploring the integration of Rust-based Turbo Modules in React Native.

### Current Progress
- Got Rust integration working, but with some limitations

![image](https://github.com/user-attachments/assets/4e1a16e2-f106-418a-a6f1-7526dcb56f00)


JS->Java->Rust (Multiply happens in Rust)
## Issue
I am not super happy the way this works. I imagined bridging through  100% cpp but was not able to do through cpp due to turbo modules enforcing errors. Had to bridge through java. 
