/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import PhoneAuth from './src/auth/PhoneAuth';
import EmailPwdAuth from './src/auth/EmailPwdAuth';

const App = () => {
  const val = 2;
  const getComponent = () => {
    let component = null;
    switch(val){
      case 1:
        component = <PhoneAuth/>;
        break;
      case 2:
        component = <EmailPwdAuth/>;
        break;
    }
    return component;
  }
  return (
    <SafeAreaView>
      {getComponent()}
    </SafeAreaView>
  );
}

export default App;
