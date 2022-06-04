package com.myreactnativeapp;

import android.graphics.Color;
import android.view.Choreographer;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.FragmentActivity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

public class ReactFragmentManager extends ViewGroupManager<FrameLayout> {
    public final int COMMAND_CREATE = 1;
    ReactApplicationContext reactContext;

    public ReactFragmentManager(ReactApplicationContext context) {
        this.reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "RCTMyCustomFragment";
    }

    @NonNull
    @Override
    protected FrameLayout createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new FrameLayout(reactContext);
    }

    @ReactProp(name = "backgroundColor")
    public void setBackgroundColor(FrameLayout view, String backgroundColor) {
        view.setBackgroundColor(Color.parseColor(backgroundColor));
    }

    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {//供rn调用的所有方法
        return MapBuilder.of("create", COMMAND_CREATE);
    }

    @Override
    public void receiveCommand(@NonNull FrameLayout root, String commandId, @Nullable ReadableArray args) {
        super.receiveCommand(root, commandId, args);
        int rnViewId = args.getInt(0);
        int commandIdInt = Integer.parseInt(commandId);
        switch (commandIdInt) {
            case COMMAND_CREATE:
                createFragment(root, rnViewId);
                break;
            default: {

            }
        }
    }

    public void createFragment(FrameLayout root, int rnViewId) {
        ViewGroup parentView = (ViewGroup)root.findViewById(rnViewId).getParent();
        setupLayout(parentView);
        MyCustomFragment fragment = new MyCustomFragment();
        FragmentActivity activity = (FragmentActivity)reactContext.getCurrentActivity();
        activity.getSupportFragmentManager()
                .beginTransaction()
                .replace(rnViewId, fragment, String.valueOf(rnViewId))
                .commit();
    }
    public void setupLayout(View view) {
        Choreographer.getInstance().postFrameCallback(new Choreographer.FrameCallback() {
            @Override
            public void doFrame(long l) {
                manuallyLayoutChildren(view);
                view.getViewTreeObserver().dispatchOnGlobalLayout();
                Choreographer.getInstance().postFrameCallback(this);
            }
        });
    }
    public void manuallyLayoutChildren(View view) {
        int width = view.getMeasuredWidth();//propWidth;
        int height = view.getMeasuredHeight();//propHeight;
        view.measure(
                View.MeasureSpec.makeMeasureSpec(width, View.MeasureSpec.EXACTLY),
                View.MeasureSpec.makeMeasureSpec(height, View.MeasureSpec.EXACTLY));
        view.layout(0, 0, width, height);
    }
}
