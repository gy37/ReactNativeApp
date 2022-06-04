package com.myreactnativeapp;

import android.graphics.Color;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

public class ReactViewManager extends SimpleViewManager<MyCustomView> {
    @NonNull
    @Override
    public String getName() {
        return "RCTMyCustomView";
    }

    @NonNull
    @Override
    protected MyCustomView createViewInstance(@NonNull ThemedReactContext reactContext) {
        MyCustomView view = new MyCustomView(reactContext);
        return view;
    }

    @ReactProp(name = "backgroundColor")
    public void setBackgroundColor(MyCustomView view, String backgroundColor) {
        view.setBackgroundColor(Color.parseColor(backgroundColor));
    }

    @Nullable
    @Override
    public Map<String, Object> getExportedCustomBubblingEventTypeConstants() {
        MapBuilder.Builder<String, Object> builder = MapBuilder.builder();
        builder.put("onTouch", MapBuilder.of(//原生事件名称
                        "phasedRegistrationNames", MapBuilder.of("bubbled", "onTouchEvent"))//rn获取到的事件名称
        );
        return builder.build();
    }
}
