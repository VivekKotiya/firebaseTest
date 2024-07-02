/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import LayoutAnimationView from './lib/src/LayoutAnimationView';
import AnimatedView from './lib/src/AnimatedView';

const App = () => {
  return (
    <SafeAreaView>
      <View><Text>Welcome to world of Animation</Text></View>
      {/* <LayoutAnimationView/> */}
      <AnimatedView/>
    </SafeAreaView>
  );
}

export default App;
