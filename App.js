/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

import Cafe from './src/components/Cafe'
import PizzaTranslator from './src/components/PizzaTranslator'
import ScrollViewTest from './src/components/ScrollViewTest'
import FastListTest from './src/components/FastListTest'
import FlexBoxTest from './src/components/FlexBoxTest'
import ImageTest from './src/components/ImageTest'

const App = () => {//const App: () => React$Node = () => { Type annotations can only be used in TypeScript files.ts(8010)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            {/* <LearnMoreLinks /> */}
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
            <ScrollViewTest></ScrollViewTest>
            <FastListTest></FastListTest>
            <Text>{Platform.OS + " " + Platform.Version}</Text>
            <FlexBoxTest></FlexBoxTest>
            <ImageTest></ImageTest>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
