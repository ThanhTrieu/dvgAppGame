package com.firstapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.swmansion.reanimated.ReanimatedPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.tradle.react.UdpSocketsModule;
import com.peel.react.TcpSocketsModule;
import com.peel.react.rnos.RNOSModule;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.bitgo.randombytes.RandomBytesPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReanimatedPackage(),
            new RNCWebViewPackage(),
            new UdpSocketsModule(),
            new TcpSocketsModule(),
            new RNOSModule(),
            new ReactNativeConfigPackage(),
            new RandomBytesPackage(),
            new RNDeviceInfo(),
            new RNI18nPackage(),
            new VectorIconsPackage(),
            new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
