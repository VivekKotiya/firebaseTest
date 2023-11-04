import React, { useState, useEffect } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

export default EmailPwdAuth = () => {
  // If null, no SMS has been sent
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
//        setUser(user);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const signOut = () => {
    auth()
    .signOut()
    .then(() => { 
      console.log("Successfully signout");
      setUser(null);
      setIsLoggedIn(false);
    })
    .catch((error) => {
      console.log("error: ", error);
    })
  }

  // Handle the button press
  const signInWithEmailPWD = (isSignIn = false) => {
    if(isSignIn){
      auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        setIsLoggedIn(true);
        setUser(data?.user);
        console.log('Singged in : ', data?.user);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
    } else {
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        setIsLoggedIn(true);
        console.log('created user', user);
      },(user) => { setUser(user) })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });

    }
  }

  if (!isLoggedIn) {
    return (
      <View style={{margin:10}}>
        <TextInput 
          style={{borderWidth: 1, margin:10}} 
          placeholder='Enter Email'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput 
          placeholder='Enter Password'
          style={{borderWidth: 1, margin:10, marginBottom:20}}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title="Sign in With email & password"
          onPress={() => signInWithEmailPWD(true)}
        />
        <View style={{margin:10}}></View>
        <Button
          title="Create User with email & password"
          onPress={() => signInWithEmailPWD(false)}
        />

      </View>
    );
  }

  return (
    <>
      <Text>Email : {user?.email}</Text>
      <Button title="Logged Out" onPress={() => signOut()} />
    </>
  );
}