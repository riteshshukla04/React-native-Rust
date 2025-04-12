#!/bin/bash
set -e

echo "🛠 Building Rust static libs..."
cd ..
cd rust_module
rm -rf Cargo.lock
rm -rf target
rm -rf ios
rm -rf include
cp Cargo.toml.ios Cargo.toml

targets=(aarch64-apple-ios x86_64-apple-ios )
for t in "${targets[@]}"; do
  rustup target add "$t"
  cargo build --release --target "$t"
done

echo "📦 Creating fat staticlib..."
mkdir -p ios/universal
lipo -create \
  target/aarch64-apple-ios/release/librustlib.a \
  target/x86_64-apple-ios/release/librustlib.a \
  -output ios/universal/librustlib.a

mv ios/universal/librustlib.a ../cpp/rustlib.a

echo "✅ Done. Output in ios/universal/ and ios/rustlib.h"
