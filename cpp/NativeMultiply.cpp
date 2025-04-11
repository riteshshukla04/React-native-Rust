#include "NativeMultiply.h"

namespace facebook::react {

NativeMultiply::NativeMultiply(std::shared_ptr<CallInvoker> jsInvoker)
    : NativeMultiplyCxxSpec(std::move(jsInvoker)) {}

int NativeMultiply::multiply(jsi::Runtime& rt, int a, int b) {
  return a * b;
}

} // namespace facebook::react