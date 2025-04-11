#pragma once

#include <NativeMultiplySpecJSI.h>

#include <memory>
#include <string>

namespace facebook::react {

class NativeMultiply : public NativeMultiplyCxxSpec<NativeMultiply> {
public:
  NativeMultiply(std::shared_ptr<CallInvoker> jsInvoker);

  double multiply(jsi::Runtime& rt, double a, double b);
};

} // namespace facebook::react
