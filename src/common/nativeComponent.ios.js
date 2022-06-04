import { requireNativeComponent } from 'react-native';
import React, { forwardRef } from 'react';

/**
 * Composes `RCTMyMapView`.
 *
 * - zoomEnabled: bool
 * - region: {latitude, longitude, latitudeDelta, longitudeDelta}
 * - onRegionChange: Function
 */
const RCTMyMapView = requireNativeComponent('RCTMyMapView');
const MapView = forwardRef((props, ref) => {
  const handleRegionChange = (event) => {
    console.log(event.nativeEvent);
    props.onRegionChange&&props.onRegionChange(event.nativeEvent);
  };

  return (
    <RCTMyMapView {...props} ref={ref} onRegionChange={handleRegionChange}/>
  );
});



export { MapView };