import React, { Component, useState } from "react";
import { StyleSheet, Button, Alert, TouchableOpacity, View, Text, TouchableHighlight } from "react-native";

export default class TouchTest extends Component {
  _onPressButton() {
    Alert.alert('点击了按钮');
  }
  _onLongPressButton() {
    Alert.alert('长按了按钮');
  }
  render() {
    return (
      <>
        <Button
          onPress={() => {
            Alert.alert('点击了按钮');
          }}
          title="点我"
          color="#841584"
          backgroundColor="red"
        ></Button>
        <TouchableOpacity onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlyColor="white"> 
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="red">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
      </>);
  }
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white"
  }
});
