package com.myreactnativeapp;

import android.content.Context;
import android.graphics.Color;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class MyCustomView extends View {
    public MyCustomView(Context context) {
        super(context);
    }

    public void onReceiveNativeEvent() {
        WritableMap params = Arguments.createMap();
        params.putString("message", "MyCustomerView Message");
        ReactContext reactContext = (ReactContext) getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(getId(), "onTouch", params);
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        onReceiveNativeEvent();
        return super.onTouchEvent(event);
    }
}
