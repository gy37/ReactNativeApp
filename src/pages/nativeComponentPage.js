import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Platform, UIManager, findNodeHandle, } from 'react-native';
import { MyImageView, MyCustomView, MyCustomFragment, MapView } from '../common/nativeComponent';
import DirectActionView from '../components/DirectActionView';

const createFragment = (viewId) => UIManager.dispatchViewManagerCommand(
  viewId,
  UIManager.RCTMyCustomFragment.Commands.create.toString(),
  [viewId],
);
const changeRegion = (viewId) => UIManager.dispatchViewManagerCommand(
  viewId,//view tag
  UIManager.getViewManagerConfig('RCTMyMapView').Commands.changeRegion,//function
  [{
    latitude: 31.323,
    longitude: 120.627,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  }],//args
);

const NativeComponent = () => {
  const fragmentRef = useRef(null);
  const mapViewRef = useRef(null);

  onChangeMessage = (message) => {
    console.log(message);
  };

  useEffect(() => {
    if (Platform.OS == 'ios') {
      setTimeout(() => {
        const viewId = findNodeHandle(mapViewRef.current);
        console.log(mapViewRef, viewId);
        changeRegion(viewId);
      }, 2000);
    } else if (Platform.OS == 'android') {
      const viewId = findNodeHandle(fragmentRef.current);
      console.log(fragmentRef, viewId);
      createFragment(viewId);
    }
  }, []);

  onRegionChange = (event) => {
    console.log(event.region);
  };

  return (
    <View style={{ flex: 1 }}>
      {Platform.OS=='ios'
      ? <MapView
          style={{ flex: 1 }}
          ref={mapViewRef}
          zoomEnabled={true}
          region={{
            latitude: 31.228,
            longitude: 121.475,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          onRegionChange={onRegionChange}/>
      : <>
        <MyImageView
          style={{ width: 100, height: 100, }}
          src={[{uri: 'https://reactnative.dev/img/tiny_logo.png'}]}
          resizeMode='stretch' borderRadius={50}
          backgroundColor="#ff0000"/>
        <MyCustomView style={{ width: 150, height: 150 }} backgroundColor="#00ff00" onChangeMessage={onChangeMessage}/>
        <MyCustomFragment
          style={{ height: '100%', width: '100%', }}
          ref={fragmentRef}
          backgroundColor="#0000ff"/>
        </>
      }
      <DirectActionView />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default NativeComponent;
