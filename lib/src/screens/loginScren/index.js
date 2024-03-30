import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Email</Text>
      <TextInput style={styles.textinput} />
      <Text style={styles.header}>Password</Text>
      <TextInput style={styles.textinput} />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
