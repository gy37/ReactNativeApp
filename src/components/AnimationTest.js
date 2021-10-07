import React, { Component, useRef, useState } from "react";
import { StyleSheet, Button, Alert, TouchableOpacity, View, Text, Animated } from "react-native";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim]);
  
  return (
    <Animated.View
      style={{...props.style, opacity: fadeAnim}}
    >
      {props.children}
    </Animated.View>
  );
};

export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: "center", margin: 10}}>Fadding in</Text>
      </FadeInView>
    </View>
  );
}
