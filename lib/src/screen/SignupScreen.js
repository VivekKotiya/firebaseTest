import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const SignupScreen = ({ navigation }) => {
  const [username, setUserName] = useState(null);
  const [pwd, setPwd] = useState(null);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 100,
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
          onChangeText={(text) => setUserName(text)}
        />
        <Text style={{ padding: 10 }}>Password</Text>
        <TextInput
          style={{
            margin: 10,
            padding: 10,
            borderWidth: 1,
            borderColor: "black",
          }}
          onChangeText={(text) => setPwd(text)}
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
          onPress={() =>
            navigation.navigate("Login", { user: username, password: pwd })
          }
        >
          <Text style={{ color: "white", textAlign: "center" }}>Signup</Text>
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
        onPress={() => navigation.navigate("Login", { name: "Vivek" })}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Login in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
