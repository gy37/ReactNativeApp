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
import { Button, Text } from 'react-native';

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
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitle: '返回',
        }}>
        <Stack.Screen
          name="Example"
          component={Example}
          options={({navigation, route}) => ({ //options可以获取到navigation和route参数
            title: '示例',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Foundation', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                })}
                title="Foundation"
                color="#fff"
              />
            ),
          })}/>
        <Stack.Screen
          name="Foundation"
          component={Foundation}
          options={({navigation, route}) => ({
            title: '入门基础',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Environment')}
                title="Environment"
                color="#fff"
              />
            ),
          })}
          initialParams={{itemId: 0}}
        />
        <Stack.Screen
          name="Environment"
          component={Environment}
          options={{ title: '环境搭建', }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
