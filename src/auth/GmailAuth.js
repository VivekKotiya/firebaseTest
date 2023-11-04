import React, { useState, useEffect } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

export default GmailAuth = () => {
  // If null, no SMS has been sent
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      console.log("user:::: ", user );
      setUser(user);
      setIsLoggedIn(true);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    GoogleSignin.configure();
  },[])

  const signOut = async () => {
    GoogleSignin
    .signOut()
    .then((data) => { 
      console.log("Successfully signout", data);
      setUser(null);
      setIsLoggedIn(false);
    })
    .catch((error) => {
      console.log("error: ", error);
    })
  }

  // Handle the button press
  const signIn = async() => {
    try {
      await GoogleSignin.hasPlayServices();
      GoogleSignin
      .signIn()
      .then((data) => {
        console.log("user login : ", data);
        setUser(data?.user);
        setIsLoggedIn(true);
      })
      .catch((error) => {});
      
    }catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
    }
  }

  if (!isLoggedIn) {
    return (
      <View style={{margin:10}}>
       <View style={{margin:10}}></View>
        <Button
          title="Gmail Signin"
          onPress={() => signIn()}
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