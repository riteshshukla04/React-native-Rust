cd ..
cd rust_module
pwd
cargo ndk -t armeabi-v7a -t arm64-v8a -t x86_64 -t x86 -o ../android/app/src/main/jniLibs  build --release
cd ..
cd android

