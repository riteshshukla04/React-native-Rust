//
//  NativeMultiplyProvider.m
//  RustPOC
//
//  Created by ritesh shukla2 on 12/04/25.
//

#import "NativeMultiplyProvider.h"
#import <ReactCommon/CallInvoker.h>
#import <ReactCommon/TurboModule.h>
#import "NativeMultiply.h"

@implementation NativeMultiplyProvider

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeMultiply>(params.jsInvoker);
}

@end
