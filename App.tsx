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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './lib/src/screen/LoginScreen';
import SignupScreen from './lib/src/screen/SignupScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"LoginScreen"} component={LoginScreen} options={{title:"My Home"}}/>
        <Stack.Screen name={"SignupScreen"} component={SignupScreen} options={{title: "Singup"}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

{/* <LoginScreen/> */}
//<SignupScreen/>
//</View>

export default App;
