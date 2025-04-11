#include "NativeMultiply.h"
#include "rust_bridge.h"

namespace facebook::react {

NativeMultiply::NativeMultiply(std::shared_ptr<CallInvoker> jsInvoker)
    : NativeMultiplyCxxSpec(std::move(jsInvoker)) {}

double NativeMultiply::multiply(jsi::Runtime& rt, double a, double b) {
  return call_rust_runtime(a, b);
  
  
}

} // namespace facebook::react