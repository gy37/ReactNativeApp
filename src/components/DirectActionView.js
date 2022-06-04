import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

const MyButton = (props) => {
  return (
    <View style={{marginTop: 50}}>
      <Text>{props.label}</Text>
    </View>
  );
};

const DirectActionView = () => {
  const inputRef = useRef(null);
  const clearText = () => {
    inputRef.current.setNativeProps({text: ''});
  }

  return (
    <View>
      <TouchableOpacity onPress={clearText}>
        <MyButton label="Press me!" />
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
        style={{width: 200, height: 50, borderWidth: 1, borderColor: '#ccc'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default DirectActionView;
