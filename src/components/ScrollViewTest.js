import React, {useState} from 'react';
import {Text, TextInput, View, ScrollView, Image} from 'react-native'

const ScrollViewTest = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Text>this is a text in scrollview</Text>
      <Image source={{url: 'https://reactnative.dev/img/tiny_logo.png', width: 64, height: 64}}/>
      <Image source={{url: 'https://reactnative.dev/img/tiny_logo.png', width: 64, height: 64}}/>
      <Text>this is a text in scrollview</Text>
      <Image source={{url: 'https://reactnative.dev/img/tiny_logo.png', width: 64, height: 64}}/>
      <Image source={{url: 'https://reactnative.dev/img/tiny_logo.png', width: 64, height: 64}}/>
      <Text>this is a text in scrollview</Text>
      <Image source={{url: 'https://reactnative.dev/img/tiny_logo.png', width: 64, height: 64}}/>
      <Image source={{url: 'https://reactnative.dev/img/tiny_logo.png', width: 64, height: 64}}/>
    </ScrollView>
  );
}

export default ScrollViewTest;
