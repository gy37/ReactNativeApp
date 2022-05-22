/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   Image,
   TextInput,
   Platform
 } from 'react-native';

 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 import Cafe from '../components/Cafe'
 import PizzaTranslator from '../components/PizzaTranslator'
 import ScrollViewTest from '../components/ScrollViewTest'
 import FastListTest from '../components/FastListTest'

 const Foundation = ({navigation, route}) => {//组件里可以获取navigation和route参数
   console.log('navigation', navigation);
   console.log('route', route, route.params);
   useEffect(()=>{
     console.log('useEffect在render之后执行');
   });
   return (
    <View style={{flex: 1, overflow: 'scroll'}}>
      {/* <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello world</Text>
      </View>
      <View>
        <Text>Some text</Text>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width: 200, height: 200}} />
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} defaultValue="input text here"></TextInput>
      </View>
      <Cafe></Cafe>
      <PizzaTranslator></PizzaTranslator>
      </> */}

      <ScrollViewTest></ScrollViewTest>
      <FastListTest></FastListTest>
      <Text>{Platform.OS + " " + Platform.Version}</Text>
    </View>
   );
 };

 const styles = StyleSheet.create({

 });

 export default Foundation;
