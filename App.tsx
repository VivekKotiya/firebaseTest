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
import { Provider } from 'react-redux';
import CounterView from './lib/src/component/useReducerComponent';
import './lib/src/store';
import SongView from './lib/src/component/songView';
import { store } from './lib/src/store';
import MovieView from './lib/src/component/movieView';
import BookView from './lib/src/component/bookView';

const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaView>
      <View><Text>Welcome to App</Text></View>
      {/* <CounterView/> */}
      <SongView/>
      <MovieView/>
      <BookView/>
    </SafeAreaView>
    </Provider>
  );
}

export default App;
