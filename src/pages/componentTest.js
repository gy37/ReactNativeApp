import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, SafeAreaView, Alert, Button,
  KeyboardAvoidingView, TextInput, Platform, TouchableWithoutFeedback, Keyboard,
  Modal, TouchableHighlight, ScrollView, RefreshControl, StatusBar, Switch, TouchableOpacity,

} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const ComponentsAndAPIs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    promise.then(() => setRefreshing(false));
  }, []);

  return (
    // <KeyboardAvoidingView behavior={Platform.OS=='ios'?'padding':'height'} style={styles.container}>
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //     <SafeAreaView style={[styles.container]}>
    //       <View style={styles.subContainer}>
    //         <ActivityIndicator />
    //         <ActivityIndicator size='large' color='#00ff00'/>
    //         <ActivityIndicator size='small' color='#ff0000'/>
    //       </View>
    //       <View style={styles.subContainer}>
    //         <Button
    //           title='Press me'
    //           color='#f194ff'
    //           onPress={()=>Alert.alert('Simple Button pressed')}
    //         />
    //       </View>
    //       <View style={styles.subContainer}>
    //         <TextInput placeholder='username' style={styles.textInput}/>
    //       </View>
    //       <View style={styles.subContainer}>
    //         <TouchableHighlight onPress={()=>setModalVisible(true)} style={styles.button}>
    //           <Text style={{color: 'white', textAlign: 'center'}}>Show Modal</Text>
    //         </TouchableHighlight>
    //       </View>
    //       <Modal
    //         animationType='fade'
    //         transparent={true}
    //         visible={modalVisible}
    //         onRequestClose={()=>setModalVisible(!modalVisible)}
    //       >
    //         <View style={styles.container}>
    //           <View style={styles.modalView}>
    //             <Text style={{textAlign: 'center', marginBottom: 16}}>Hello World</Text>
    //             <TouchableHighlight onPress={()=>setModalVisible(!modalVisible)} style={styles.button}>
    //               <Text style={{color: 'white', textAlign: 'center'}}>Hide Modal</Text>
    //             </TouchableHighlight>
    //           </View>
    //         </View>
    //       </Modal>
    //     </SafeAreaView>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
    <View style={[styles.container]}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }
        showsVerticalScrollIndicator={false}
      >
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
      <StatusBar backgroundColor={'blue'} hidden={false} barStyle='dark-content' />
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        onValueChange={()=>setEnabled(!enabled)}
        value={enabled}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight style={styles.button} onPress={()=>Alert.alert('TouchableHighlight Button pressed')}>
          <Text>Press here</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.button} onPress={()=>Alert.alert('TouchableOpacity Button pressed')}>
          <Text>Press here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'center'
  },
  subContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  button: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 40,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
});

export default ComponentsAndAPIs;
