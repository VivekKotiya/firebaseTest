##redme
to get reference:

https://medium.com/@matheshyogeswaran/building-authentication-in-react-native-with-firebase-a-step-by-step-guide-0b2a42d66a50


Search
Write
Sign up

Sign in



Building Authentication in React Native with Firebase: A Step-by-Step Guide
Matheshyogeswaran
Matheshyogeswaran

·
Follow

4 min read
·
Feb 23, 2024
2


1




Here, we are going to delve into setting up React Native with Firebase and then setting up email authentication. Before proceeding, ensure that you have set up the environment for React Native. Once you have completed the setup, follow these steps

npx react-native@latest init myapp
Next, proceed to create a project in Firebase
Navigate to Firebase Console
go to this link there you need to create the project

​
3. Name it as you prefer


4. Click continue


5. Click on Select an account


Here, choose the default account

6. Click on Create a project


7. Click on Continue


Now, let’s configure Firebase for your React Native project
Click on Create an Android app.

2. Set the package name as “com.myapp” (ensure it matches your React Native package name).


Enter ‘try’ as the nickname, then click on ‘Register app’.

3. Download the google-services.json file and place it in the android/app/ folder.

4. Add the following line at the bottom of android/app/build.gradle:


apply plugin: ‘com.google.gms.google-services’
5. In android/build.gradle, under dependencies, add:

classpath ‘com.google.gms:google-services:4.4.0’
6. Now, install the necessary Firebase packages

npm install @react-native-firebase/app
npm install @react-native-firebase/auth
Ensure that email authentication is enabled in your Firebase console.


Finally, let’s create a simple authentication flow using Firebase in your React Native app.

Singin.tsx

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // To store user information

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(userAuth => {
      setUser(userAuth); 
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        } else {
          Alert.alert('Error', error.message);
        }
        console.error(error);
      });
  };

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out successfully');
      })
      .catch(error => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
        <View>
          <Text>Welcome, {user.email}</Text>
          <Button title="Sign Out" onPress={handleSignOut} />
        </View>
      ) : (
        <View>
          <TextInput
            style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
          <Button title="Sign Up" onPress={handleSignUp} />
        </View>
      )}
    </View>
  );
};

export default Signin;
App.tsx

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Signin from './Signin';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Signin />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
With everything set up, you can now run your React Native application.


Demo of How It Works
For more detailed documentation and guides on integrating Firebase with React Native, you can visit the official React Native Firebase website at

React Native Firebase | React Native Firebase
Welcome to React Native Firebase! To get started, you must first setup a Firebase project and install the “app” module.
rnfirebase.io

Integrating Firebase with React Native empowers your app development. To access the complete code for this tutorial, please visit the GitHub repository. If you’d like to connect, feel free to find me on LinkedIn.

Happy coding, and best of luck with your projects!

React Native
Firebase
Authentication
React Native Development
Firebaseauthentication
2


1


Matheshyogeswaran
Written by Matheshyogeswaran
95 Followers
Mathesh is undergraduate of university of moratuwa. | LinkedIn:https://www.linkedin.com/in/mathesh-yogeswaran

Follow

More from Matheshyogeswaran
Building Real-Time Applications with Socket.io,
Matheshyogeswaran
Matheshyogeswaran

in

Bits and Pieces

Building Real-Time Applications with Socket.io,
Real-Time Web Development: A Comprehensive Guide to Building Interactive Applications with Socket.io, React.js, Node.js, and Express.js
4 min read
·
Jun 22, 2023
224

Top 10 Microservice Anti-Patterns
Lahiru Hewawasam
Lahiru Hewawasam

in

Bits and Pieces

Top 10 Microservice Anti-Patterns
Ten Common Anti-Patterns and How to Avoid Them
10 min read
·
Feb 26, 2024
2K

12

Best-Practices for API Authorization
Chameera Dulanga
Chameera Dulanga

in

Bits and Pieces

Best-Practices for API Authorization
4 Best Practices for API Authorization
9 min read
·
Feb 6, 2024
2.1K

10

Firebase Auth with React: Implement Email/Password and Google Sign-in
Matheshyogeswaran
Matheshyogeswaran

in

Bits and Pieces

Firebase Auth with React: Implement Email/Password and Google Sign-in
Firebase Authentication is a powerful tool for managing user authentication in web and mobile applications. With Firebase, developers can…
7 min read
·
Apr 27, 2023
112

2

See all from Matheshyogeswaran
Recommended from Medium
Form Management: Using React Hook Form with Firebase in React Native.
Rizwansabirawan
Rizwansabirawan

Form Management: Using React Hook Form with Firebase in React Native.
In modern app development, managing forms efficiently is crucial. React Hook Form is a powerful library for form management in React…
5 min read
·
Mar 24, 2024
How to Close A UIViewController From Your React Native App — The BETTER Way
Matt Croak Code
Matt Croak Code

How to Close A UIViewController From Your React Native App — The BETTER Way
Refining our previous solution

·
4 min read
·
Mar 8, 2024
23

Lists


Stories to Help You Grow as a Software Developer
19 stories
·
941 saves
Standardize Your React Native Codebase: ESLint, Typescript, and Prettier
Rushit Jivani
Rushit Jivani

in

Level Up Coding

Standardize Your React Native Codebase: ESLint, Typescript, and Prettier
React Native Project with TypeScript for Error-Free and Consistent Code
6 min read
·
Mar 12, 2024
48

1

Build Stronger React Native Apps with SOLID Principles: A Beginner’s Guide with Code Examples
Younis Rahman
Younis Rahman

Build Stronger React Native Apps with SOLID Principles: A Beginner’s Guide with Code Examples
Do you ever find yourself struggling to maintain your React Native code as your app grows? It can become difficult to keep track of…
7 min read
·
Mar 9, 2024
15

1

A simple To-do app in React Native with Firebase Authentication, Storage, Firestore
Balamurugan V
Balamurugan V

in

Stackademic

A simple To-do app in React Native with Firebase Authentication, Storage, Firestore
Hello everyone! This time I’ll share my experience in doing a simple app in React Native for To-do list using Firebase.
9 min read
·
Jan 12, 2024
Expo + Google Sign in Image
Prasad Katkade
Prasad Katkade

in

JavaScript in Plain English

How to Add Google Sign-In: Expo React Native Guide [2024]
Preface — I started a project to explore and learn React Native, and during this journey, I found the need for a Google OAuth Sign In…
6 min read
·
Mar 10, 2024
2

See more recommendations
Help

Status

About

Careers

Blog

Privacy

Terms

Text to speech

Teams