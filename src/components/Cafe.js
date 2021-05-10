import React from 'react'
import {Text, TextInput, View} from 'react-native'
import Cat from './Cat'

const Cafe = () => {
  return (//Fragments片段，根元素必须为单个元素，如果多个元素的话就用<></>包裹起来
  <>
    <Text>Welcome!</Text>
    <Cat name="Maru"></Cat>
    <Cat name="Jellylorum"></Cat>
    <Cat name="Spot"></Cat>
  </>);
}

export default Cafe;
