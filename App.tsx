/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './lib/src/navigation/DrawerNavigator';
import StackNavigator from './lib/src/navigation/StackNavigator';
import BottomTabNavigator from './lib/src/navigation/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator/>
      {/* <BottomTabNavigator/> */}
    </NavigationContainer>
  );
}

export default App;
