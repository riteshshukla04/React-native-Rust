#pragma once

#include <AppSpecsJSI.h>

#include <memory>
#include <string>

namespace facebook::react {

class NativeMultiply : public NativeMultiplyCxxSpec<NativeMultiply> {
public:
  NativeMultiply(std::shared_ptr<CallInvoker> jsInvoker);

  int multiply(jsi::Runtime& rt, int a, int b);
};

} // namespace facebook::react
