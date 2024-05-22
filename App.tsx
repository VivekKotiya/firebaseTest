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
import './lib/src/store';
import SongView from './lib/src/component/songView';
import { Provider } from 'react-redux';
import { store } from './lib/src/store';
import MovieView from './lib/src/component/movieView';

const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaView>
      <View><Text>Welcome to App</Text></View>
      {/* <CounterView/> */}
      <SongView/>
      <MovieView/>
    </SafeAreaView>
    </Provider>
  );
}

export default App;
