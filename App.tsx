/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ListView from './lib/src/component/listView';
import withLoader from './lib/src/HOC/loader';
import SimpleView from './lib/src/component/simpleView';

const App = () => { 
  const [isLoading, setIsLoading] = useState(true);
  const NewList = withLoader(ListView, isLoading);
  const SimpleViewWithLoader = withLoader(SimpleView, isLoading); 

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  return (
    <SafeAreaView>
      <NewList/>
      {/* <SimpleViewWithLoader /> */}
    </SafeAreaView>
  );
}

export default App;
