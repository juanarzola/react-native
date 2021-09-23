package com.evernote.turbomodules;

import com.facebook.proguard.annotations.DoNotStrip;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReactModuleWithSpec;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import android.util.Log;

public class EvernoteTurboModule  extends flowSchemaSpec {
  public static final String NAME = "EvernoteTurboModule";
  public EvernoteTurboModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @ReactMethod(isBlockingSynchronousMethod = true)
  @DoNotStrip
  public boolean setAnObject(ReadableMap object) {
      Log.d("EvernoteTurboModule", "setAnObject");
      return true;
  }

  @ReactMethod(isBlockingSynchronousMethod = true)
  @DoNotStrip
  public WritableMap getAnObject(){
    Log.d("EvernoteTurboModule", "getAnObject");
    WritableMap dest = new WritableNativeMap();
    dest.putInt("theInt", 123);
    return dest;
  }

  @Override
  public String getName() {
    return NAME;
  }
}
