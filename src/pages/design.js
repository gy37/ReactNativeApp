import React, { useEffect } from 'react';
import { View } from 'react-native';
import FlexBoxTest from '../components/FlexBoxTest'
import ImageTest from '../components/ImageTest'
import TouchTest from '../components/TouchTest'
import AnimationTest from '../components/AnimationTest'
import GestureAnimation from '../components/GestureAnimation';

const Design = () => {
  return (
    <View style={{flex: 1}}>
      {/* <FlexBoxTest></FlexBoxTest> */}
      {/* <>
      <ImageTest></ImageTest>
      <TouchTest></TouchTest>
      <AnimationTest></AnimationTest>
      </> */}
      <GestureAnimation />
    </View>
  );
};

export default Design;