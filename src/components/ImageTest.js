import React, {useState} from 'react'
import { Text, View, TextInput, Image, Button, ImageBackground, ScrollView } from 'react-native'

const ImageTest = (props) => {
  //[<取值>, <设值>] = useState(<初始值>)

  //ios网络图片缓存策略，reload不用缓存，force-cache使用缓存，没有则请求，only-if-cached使用缓存，没有不请求
  return (
    <ScrollView style={{flex: 1}}>
      <Image source={require('../files/aaa.png')} style={{width: 400}}></Image>
      <Image
        source={{uri: 'https://facebook.github.io/react/logo-og.png', cache: 'only-if-cached',}}
        style={{width: 400, height: 400}}
      >
      </Image>
      <Image
        style={{width: 51, height: 51, resizeMode: 'contain'}}
        source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
      ></Image>
      <ImageBackground source={{uri: 'https://facebook.github.io/react/logo-og.png'}} style={{width: 200, height: 200}}>
        <Text style={{color: 'white'}}>测试背景图片</Text>
        <View style={{backgroundColor: 'darkorange', width: 100, height: 100}}></View>
      </ImageBackground>
    </ScrollView>
  )
}

export default ImageTest;