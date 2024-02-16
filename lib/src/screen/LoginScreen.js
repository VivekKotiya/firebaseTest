import { Icon } from "@rneui/base";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 200,
        alignContent: "center",
        backgroundColor: "white",
      }}
    >
      <View style={{ marginHorizontal: 10, backgroundColor: "lightgray" }}>
        <Text style={{ padding: 10 }}>Email Address</Text>
        <TextInput
          style={{
            margin: 10,
            padding: 10,
            borderWidth: 1,
            borderColor: "black",
          }}
        />
        <Text style={{ padding: 10 }}>Password</Text>
        <TextInput
          style={{
            margin: 10,
            padding: 10,
            borderWidth: 1,
            borderColor: "black",
          }}
        />
        <TouchableOpacity
          style={{
            marginHorizontal: 100,
            marginVertical: 20,
            padding: 10,
            backgroundColor: "blue",
            borderRadius: 20,
            borderColor: "gray",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ margin: 10, textAlign: "center" }}>Or</Text>
      <TouchableOpacity
        style={{
          marginHorizontal: 100,
          marginVertical: 20,
          padding: 10,
          backgroundColor: "blue",
          borderRadius: 20,
          borderColor: "gray",
        }}
        onPress={() => navigation.navigate("Signup", { name: "Vivek" })}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
