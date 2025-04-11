


// #[unsafe(no_mangle)]
// pub extern "C" fn Java_com_rustpoc_RustBridge_multiply(
//     _env: jni::JNIEnv,
//     _class: jni::objects::JClass,
//     a: f64,
//     b: f64,
// ) -> f64 {
//     a * b
// }


#[unsafe(no_mangle)]
pub extern "C" fn rust_multiply(a: f64, b: f64) -> f64 {
    a*b
}