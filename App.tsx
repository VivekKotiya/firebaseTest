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
import GmailAuth from './src/auth/GmailAuth';

const App = () => {
  const val = 3;
  const getComponent = () => {
    let component = null;
    switch(val){
      case 1:
        component = <PhoneAuth/>;
        break;
      case 2:
        component = <EmailPwdAuth/>;
        break;
      case 3:
          component = <GmailAuth/>;
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
