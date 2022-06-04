import { requireNativeComponent, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Composes `RCTMyImageView`.
 *
 * - src: string
 * - borderRadius: number
 * - resizeMode: 'cover' | 'contain' | 'stretch'
 * - backgroundColor: hexString
 */
const MyImageView = requireNativeComponent('RCTMyImageView');

/**
 * Composes `RCTMyCustomView`.
 *
 * - onTouchEvent: Event
 */
const RCTMyCustomView = requireNativeComponent('RCTMyCustomView');
const MyCustomView = (props) => {
  onTouchEvent = (event) => {
    props.onChangeMessage&&props.onChangeMessage(event.nativeEvent.message);
  }
  return (
    <RCTMyCustomView
      {...props}
      onTouchEvent={onTouchEvent}
    />
  );
};

/**
 * Composes `RCTMyCustomFragment`.
 *
 * - backgroundColor: hex string
 */
const MyCustomFragment = requireNativeComponent('RCTMyCustomFragment');

export { MyImageView, MyCustomView, MyCustomFragment };