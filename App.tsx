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
import { FetchDemo } from './lib/src/service/fetch';

const App = () => {
  return (
    <SafeAreaView>
      <View><Text>Welcome to App</Text></View>
      <FetchDemo />
    </SafeAreaView>
  );
}

export default App;
