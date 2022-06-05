/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Example from './src/pages/example';
import Foundation from './src/pages/foundation';
import Environment from './src/pages/environment';
import Develop from './src/pages/develop';
import Design from './src/pages/design';
import Performance from './src/pages/performance';
import JSEnvironment from './src/pages/jsEnvironment';
import NativeModule from './src/pages/nativeModulePage';
import NativeComponent from './src/pages/nativeComponentPage';
import ComponentTest from './src/pages/componentTest';

import { Button, Text, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(()=>{
    console.log('useEffect在render之后执行');
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Example"
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          headerBackTitle: '返回',
        }}>
        <Stack.Screen
          name="Example"
          component={Example}
          options={({navigation, route}) => ({ //options可以获取到navigation和route参数
            title: '示例',
            headerRight: () => (
              <Button
                onPress={() =>
                  Alert.alert('测试标题', '测试内容', [
                    { text: '确定', onPress: ()=>{console.log('点击确定按钮')} },
                    { text: '取消', style: 'cancel' }
                  ],)
                }
                title="测试"
                color={Colors.primary}
              />
            ),
          })}/>
        <Stack.Screen
          name="Foundation"
          component={Foundation}
          options={{ title: '入门基础', }}
          initialParams={{itemId: 0}}
        />
        <Stack.Screen
          name="Environment"
          component={Environment}
          options={{ title: '环境搭建', }}
        />
        <Stack.Screen
          name="Develop"
          component={Develop}
          options={{ title: '开发流程', }}
        />
        <Stack.Screen
          name="Design"
          component={Design}
          options={{ title: '设计', }}
        />
        <Stack.Screen
          name="Performance"
          component={Performance}
          options={{ title: '性能调优', }}
        />
        <Stack.Screen
          name="JSEvnironemnt"
          component={JSEnvironment}
          options={{ title: 'JavaScript运行环境', }}
        />
        <Stack.Screen
          name="NativeModule"
          component={NativeModule}
          options={{ title: '原生模块', }}
        />
        <Stack.Screen
          name="NativeComponent"
          component={NativeComponent}
          options={{ title: '原生组件', }}
        />
        <Stack.Screen
          name="ComponentsAndApis"
          component={ComponentTest}
          options={{ title: '组件和API', }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
