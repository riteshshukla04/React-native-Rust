//
//  RustInterop.cpp
//  RustPOC
//
//  Created by ritesh shukla2 on 12/04/25.
//

#include "RustInterop.h"

#if __APPLE__
#include "rustlib.h"
#else
#include "rust_bridge.h"
#endif

double callRustMultiply(double a, double b) {
#if __APPLE__
  return rust_multiply(a, b);
#else
  return call_rust_runtime(a, b);
#endif
}
