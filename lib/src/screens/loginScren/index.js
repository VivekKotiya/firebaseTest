import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Alert, Text } from "react-native";
import auth from "@react-native-firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("Error", "That email address is already in use!");
        } else if (error.code === "auth/invalid-email") {
          Alert.alert("Error", "That email address is invalid!");
        } else {
          Alert.alert("Error", error.message);
        }
        console.error(error);
      });
  };

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User signed in successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 50,
      }}
    >
      {user ? (
        <View style={{ flex: 1 }}>
          <Text style={{ color: "black", height: 40 }}>
            Welcome, {user.email}
          </Text>
          <TouchableOpacity onPress={handleSignOut}>
            <Text
              style={{
                borderWidth: 1,
                borderRadius: 10,
                height: 30,
                color: "black",
                justifyContent: "center",
                textAlign: "center",
                textAlignVertical: "center",
              }}
            >
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ margin: 50, flexDirection: "column" }}>
          <TextInput
            style={{
              height: 40,
              width: 300,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 20,
              paddingHorizontal: 10,
            }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={{
              height: 40,
              width: 300,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 20,
              paddingHorizontal: 10,
            }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity onPress={signIn}>
              <Text
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  height: 40,
                  textAlignVertical: "center",
                  borderWidth: 1,
                  borderRadius: 10,
                  margin: 5,
                  padding: 5,
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp}>
              <Text
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  textAlignVertical: "center",
                  height: 40,
                  borderWidth: 1,
                  borderRadius: 10,
                  margin: 5,
                  padding: 5,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Login;
