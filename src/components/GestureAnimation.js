import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Text, ImageBackground,
  Animated, useWindowDimensions, PanResponder, NativeModules, LayoutAnimation, TouchableOpacity } from 'react-native';

const images = new Array(6).fill('https://api.dujin.org/bing/1920.php');//https://images.unsplash.com/photo-1556740749-887f6717d7e4
const GestureAnimation = () => {
  //滚动
  const scrollX = useRef(new Animated.Value(0)).current;//记录滚动偏移量
  const { width: windowWidth } = useWindowDimensions();

  //拖动
  const panXY = useRef(new Animated.ValueXY()).current;//记录拖动位置
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,// ignore the native event
        // extract dx and dy from gestureState
        // like 'pan.x = gestureState.dx, pan.y = gestureState.dy'
        {
          dx: panXY.x, dy: panXY.y,
        }
      ]),
      onPanResponderRelease: () => {
        Animated.spring(panXY, { toValue: { x: 0, y: 0 }}).start();
        // Animated.timing(panXY, { toValue: { x: 0, y: 0 }}).start();
      }
    }),
  ).current;

  //渲染
  const { UIManager } = NativeModules;
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  function onPress(isIncrease) {
    LayoutAnimation.spring();
    const multi = isIncrease?1:-1;
    setWidth(width + 15*multi);
    setHeight(height + 15*multi);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{
              nativeEvent: { contentOffset: { x: scrollX, } }// scrollX = e.nativeEvent.contentOffset.x
            }],
            // { useNativeDriver: true }// 使用原生动画引擎
          )}
          scrollEventThrottle={1}// <-- Use 1 here to make sure no events are ever missed
        >
          {images.map((image, iamgeIndex) => {
            return (
              <View
                style={{width: windowWidth, height: 250}}
                key={iamgeIndex}
              >
                <ImageBackground source={{uri: image}} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                      {"Image - " + iamgeIndex}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, iamgeIndex) => {
            const width = scrollX.interpolate({//根据实际滚动位置，将范围映射为点的大小
              inputRange: [//滚动位置范围
                windowWidth * (iamgeIndex - 1),
                windowWidth * iamgeIndex,
                windowWidth * (iamgeIndex + 1),
              ],
              outputRange: [8, 16, 8],//点的大小
              extrapolate: 'clamp',//不要超出范围
            });
            return (
              <Animated.View
                key={iamgeIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.panContainer}>
        <Text style={styles.titleText}>Drag & Release this box!</Text>
        <Animated.View
          style={{
            transform: [
              {translateX: panXY.x},
              {translateY: panXY.y},
              {perspective: 1000} // without this line this Animation will not render on Android while working fine on iOS
            ]
          }}
          {...panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
      </View>
      <View style={styles.layoutContainer}>
        <View style={[styles.box, {width, height}]}/>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={()=>onPress(true)}>
            <View style={[styles.button, {marginRight: 5}]}>
              <Text style={styles.buttonText}>Increase</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>onPress(false)}>
          <View style={[styles.button, {marginLeft: 5}]}>
              <Text style={styles.buttonText}>Decrease</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
    margin: 8,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },

  panContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },

  layoutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default GestureAnimation;
