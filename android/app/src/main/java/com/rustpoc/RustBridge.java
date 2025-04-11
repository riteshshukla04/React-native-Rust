package com.rustpoc;

public class RustBridge {
    static {
        System.loadLibrary("rust_module"); // Ensure .so is named librust_module.so
    }

    public static native double multiply( double a, double b);
}