#include <dlfcn.h>

#define TAG "RustDynCall"



extern "C" double call_rust_runtime(double a, double b) {
    void* handle = dlopen("librustlib.so", RTLD_LAZY);
    if (!handle) {
        return 0;
    }

    using RustAddFn = double (*)(double, double);
    RustAddFn rust_multiply = (RustAddFn)dlsym(handle, "rust_multiply");

    if (!rust_multiply) {
        dlclose(handle);
        return 0;
    }

    double result = rust_multiply(a, b);
    dlclose(handle);
    return result;
}
