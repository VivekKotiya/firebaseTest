/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect} from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
      getToken();
  },[]);
  const getToken = async() => {
    const token = await messaging().getToken();
    console.log(token);
  }
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);
  return (
    <SafeAreaView>
      <View><Text>hello App</Text></View>
    </SafeAreaView>
  );
}

export default App;
