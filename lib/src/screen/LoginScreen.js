import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = ({ navigation, route }) => {
  console.log("www ", route);
  console.log("navigation ", navigation);
  const { user, password } = route?.params || {};
  console.log("user ", user);
  console.log("password ", password);

  const [username, setUserName] = useState(user || "wdwd");
  const [pwd, setPwd] = useState(password);
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
          value={username}
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
          value={pwd}
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