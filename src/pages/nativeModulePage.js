import React, { useEffect, useState, } from 'react';
import { StyleSheet, View, Platform, NativeEventEmitter, Button } from 'react-native';
import { ToastModule, ImagePickerModule, CalendarManager, } from '../common/nativeModule';

const NativeModule = () => {
  useEffect(() => {
    let toastEventListener = null;
    let subscription = null;
    if (Platform.OS == 'ios') {
      //js订阅iOS事件
      const calendarEmitter = new NativeEventEmitter(CalendarManager);
      subscription = calendarEmitter.addListener('EventReminder', (reminder) => {
        console.log(reminder.name);
      });
    } else if (Platform.OS == 'android') {
      //js监听安卓事件
      const eventEmitter = new NativeEventEmitter(ToastModule);
      toastEventListener = eventEmitter.addListener('EventReminder', (event) => {
        console.log(event.eventProperty);
      });
    }
    return () => {
      if (Platform.OS == 'ios') {
        subscription.remove();//取消订阅
      } else if (Platform.OS == 'android') {
        toastEventListener.remove();//移除监听
      }
    };
  }, []);

  const showToast = () => {
    if (Platform.OS == 'ios') {
    } else if (Platform.OS == 'android') {
      ToastModule.showWithCallback('Awesome000', ToastModule.SHORT, (msg) => {
        console.log(msg);
      });

      let resultPromise = ToastModule.showWithPromise('Awesome111', ToastModule.SHORT);
      resultPromise.then((result) => console.log(result));
    }
  };
  const pickImage = () => {
    if (Platform.OS == 'ios') {
    } else if (Platform.OS == 'android') {
      let pickPromise = ImagePickerModule.pickImage();
      pickPromise.then(uri => console.log(uri), error => console.log(error));
    }
  };

  async function sendMessage() {
    if (Platform.OS == 'ios') {
      CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey', new Date().getTime(), (error, values) => {
        console.log(error, values);
      });

      try {
        const events = await CalendarManager.findEvents();
        console.log(events);
      } catch (e) {
        console.error(e);
      }
    } else if (Platform.OS == 'android') {

    }
  };
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button title="Android显示Toast" onPress={showToast}/>
        <Button title="Android选择图片" onPress={pickImage}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button title="iOS发送消息" onPress={sendMessage}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default NativeModule;
