package com.takenaka;

import android.os.Build;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.function.Function;

public class MathOperations extends ReactContextBaseJavaModule {

    public MathOperations(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "MathOperations";
    }
    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    public void add(int num1, int num2){
       System.out.println(num1+num2);
    }

}
