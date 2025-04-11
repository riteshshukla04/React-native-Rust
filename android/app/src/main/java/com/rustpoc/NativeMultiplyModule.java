package com.rustpoc;

import android.content.Context;
import android.content.SharedPreferences;
import com.rustpoc.NativeMultiplySpec;
import com.facebook.react.bridge.ReactApplicationContext;
import com.rustpoc.RustBridge;
import android.util.Log;

public class NativeMultiplyModule extends NativeMultiplySpec {

  public static final String NAME = "NativeMultiply";

  public NativeMultiplyModule(ReactApplicationContext reactContext) {
    super(reactContext);
     
    
  }
   

  @Override
  public String getName() {
    return NAME;
  }

  @Override
  public double  multiply(double a, double b){
    RustBridge rustBridge = new RustBridge();
    double result = rustBridge.multiply(a, b);
    return  result;
  }

}