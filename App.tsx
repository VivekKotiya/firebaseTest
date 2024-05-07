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
import UserProvider from './lib/src/context/userContext';
import SimpleView from './lib/src/component/simpleView';

const App = () => {
  return (
    <SafeAreaView>
      <UserProvider>
        <View><Text>Welcome to App</Text></View>
        <SimpleView/>
      </UserProvider>
    </SafeAreaView>
  );
}

export default App;
