# React Native Turbo Modules with Rust

This is one of my weird project exploring the integration of Rust-based Turbo Modules in React Native.

### Current Progress
- Got Rust integration working, but with some limitations

<img src="https://github.com/user-attachments/assets/4e1a16e2-f106-418a-a6f1-7526dcb56f00" width="200"/>


JS->Java->Rust (Multiply happens in Rust)
## Issue
I am not super happy the way this works. I imagined bridging through  100% cpp but was not able to do through cpp due to turbo modules enforcing errors. Had to bridge through java. 

## Update

I managed to get this working on android through 100% cpp. If you are intrested in Java Way of doing this refer to branch https://github.com/riteshshukla04/React-native-Rust/tree/javaWay
