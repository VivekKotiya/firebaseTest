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
import CounterView from './lib/src/component/counterView';

const App = () => {
  return (
    <SafeAreaView>
      <View><Text>Welcome to App</Text></View>
      <CounterView/>
    </SafeAreaView>
  );
}

export default App;
