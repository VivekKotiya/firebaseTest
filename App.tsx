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
import LoginScreen from './lib/src/screen/LoginScreen';
import SignupScreen from './lib/src/screen/SignupScreen';

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <LoginScreen/> */}
      <SignupScreen/>
    </View>
  );
}

export default App;
