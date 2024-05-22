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
import CounterView from './lib/src/component/useReducerComponent';
import './lib/src/component/redux-toolkit/';
import SongView from './lib/src/component/songView';
import { Provider } from 'react-redux';
import store from './lib/src/component/redux-toolkit';
console.log("store : ", store.getState());
const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaView>
      <View><Text>Welcome to App</Text></View>
      <CounterView/>
      <SongView/>
    </SafeAreaView>
    </Provider>
  );
}

export default App;
