//
//  RustInterop.h
//  RustPOC
//
//  Created by ritesh shukla2 on 12/04/25.
//

#ifndef RUST_INTEROP_H
#define RUST_INTEROP_H

#ifdef __cplusplus
extern "C" {
#endif

double callRustMultiply(double a, double b);

#ifdef __cplusplus
}
#endif

#endif // RUST_INTEROP_H
