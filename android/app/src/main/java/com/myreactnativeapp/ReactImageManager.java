package com.myreactnativeapp;

import android.graphics.Color;

import androidx.annotation.NonNull;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageView;

public class ReactImageManager extends SimpleViewManager<ReactImageView> {
    public static final String REACT_CLASS = "RCTMyImageView";
    ReactApplicationContext mCallerContext;

    public ReactImageManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @NonNull
    @Override //getName返回要给js调用的类名
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected ReactImageView createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new ReactImageView(reactContext, Fresco.newDraweeControllerBuilder(), null, mCallerContext);
    }

    //要导出给 JavaScript 使用的属性，需要申明带有@ReactProp（或@ReactPropGroup）注解的设置方法。方法的第一个参数是要修改属性的视图实例，第二个参数是要设置的属性值。
    //@ReactProp注解必须包含一个字符串类型的参数name。这个参数指定了对应属性在 JavaScript 端的名字。
    //除了name，@ReactProp注解还接受这些可选的参数：defaultBoolean, defaultInt, defaultFloat
    @ReactProp(name = "src")
    public void setSrc(ReactImageView view, ReadableArray sources) {
        view.setSource(sources);
    }

    @ReactProp(name = "borderRadius", defaultFloat = 0f)
    public void setBorderRadius(ReactImageView view, float borderRadius) {
        view.setBorderRadius(borderRadius);
    }

    @ReactProp(name = ViewProps.RESIZE_MODE)
    public void setResizeMode(ReactImageView view, String resizeMode) {
        view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
    }

    @ReactProp(name = "backgroundColor")
    public void setBackgroundColor(ReactImageView view, String backgroundColor) {
        view.setBackgroundColor(Color.parseColor(backgroundColor));
    }
}
