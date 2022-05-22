import React, { Component, useRef, useState } from "react";
import { StyleSheet, Button, Alert, TouchableOpacity, View, Text, Animated } from "react-native";
import Easing from "react-native/Libraries/Animated/Easing";

const FadeInView = (props) => {
  const fadeAnimValue = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnimValue, //Animated.Value动画值
      {//动画配置
        toValue: 1,//目标值
        easing: Easing.back(),//动画曲线，默认easeInOut
        duration: 3000,//时间
      }
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnimValue,
        transform: [
          {
            rotateZ: fadeAnimValue.interpolate({//映射值0-1 => 0-360度
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            })
          },
          {
            translateX: fadeAnimValue.interpolate({//映射值0-1 => 0-150
              inputRange: [0, 1],
              outputRange: [0, 150],
            })
          },
          { perspective: 1000 } // without this line this Animation will not render on Android while working fine on iOS
        ],
      }}
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
