/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Login from './lib/src/screens/loginScren/index';

const App = () => {
  return (
    <SafeAreaView>
      <Login/>
    </SafeAreaView>
  );
}

export default App;
