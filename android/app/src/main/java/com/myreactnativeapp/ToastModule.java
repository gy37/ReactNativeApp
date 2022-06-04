package com.myreactnativeapp;

import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

public class ToastModule extends ReactContextBaseJavaModule {
    private static final String TAG = "ToastModule";
    private static ReactApplicationContext reactContext;
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void showWithCallback(String message, int duration, Callback successCallback) {
        Log.d(TAG, "showWithCallback: " + message + ", " + duration);
        Toast.makeText(getReactApplicationContext(), message, duration).show();
        successCallback.invoke("show toast success");

        WritableMap params = Arguments.createMap();
        params.putString("eventProperty", "someValue");
        sendEvent(reactContext, "EventReminder", params);
    }

    @ReactMethod
    public void showWithPromise(String message, int duration, Promise promise) {
        Log.d(TAG, "showWithCallback: " + message + ", " + duration);
        Toast.makeText(getReactApplicationContext(), message, duration).show();
        WritableMap result = Arguments.createMap();
        result.putString("resultKey", "show toast success");
        promise.resolve(result);
    }

    private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }

    @ReactMethod
    public void addListener(String eventName) {
        // Set up any upstream listeners or background tasks as necessary
    }
    @ReactMethod
    public void removeListener(Integer count) {
        // Remove upstream listeners, stop unnecessary background tasks
    }
}
