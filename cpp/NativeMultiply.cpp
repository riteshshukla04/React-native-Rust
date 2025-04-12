#include "NativeMultiply.h"
#include "RustInterop.h"

namespace facebook::react {

NativeMultiply::NativeMultiply(std::shared_ptr<CallInvoker> jsInvoker)
    : NativeMultiplyCxxSpec(std::move(jsInvoker)) {}

double NativeMultiply::multiply(jsi::Runtime& rt, double a, double b) {
  return callRustMultiply(a, b);
  
  
}

} // namespace facebook::react
