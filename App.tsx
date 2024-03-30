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
import firebase from 'firebase';

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAvWQOS7uFWrOGJMinyaNvu4MMk3khq9Q4",
    authDomain: "authflow-3792c.firebaseapp.com",
    projectId: "authflow-3792c",
    storageBucket: "authflow-3792c.appspot.com",
    messagingSenderId: "1025392568321",
    appId: "1:1025392568321:web:6a2607ce33a168b6a87800"
  };
  React.useEffect(() => {
      // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
  
  }, []);
  return (
    <SafeAreaView>
      <Login/>
    </SafeAreaView>
  );
}

export default App;
