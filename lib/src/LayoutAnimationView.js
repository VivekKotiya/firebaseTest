/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  UIManager,
} from "react-native";

//Layout Animation
UIManager.setLayoutAnimationEnabledExperimental(true);

const LayoutAnimationView = () => {
  const [postion, setPostion] = useState(0);
  const btnClick = () => {
    LayoutAnimation.configureNext({
      duration: 5000,
      create: { type: "linear", property: "opacity" },
      update: { type: "spring", springDamping: 0.5 },
      delete: { type: "linear", property: "opacity" },
    });
    if (postion === 1) setPostion(0);
    else setPostion(1);
  };
  const style1 = {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    alignSelf: "flex-start",
  };
  const style2 = { height: 200, width: 200, alignSelf: "flex-end" };

  return (
    <View style={{ marginTop: 0 }}>
      <Text
        style={[
          { alignItems: "flex-start" },
          postion === 1
            ? { alignSelf: "flex-end" }
            : { alignItems: "flex-start" },
        ]}
      >
        hello {postion === 1 ? "abc" : "xyz"}
      </Text>
      <View
        style={{
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            height: 30,
            width: 100,
            borderWidth: 1,
            padding: 5,
            margin: 5,
          }}
          onPress={btnClick}
        >
          <Text style={{ textAlign: "center" }}>Click here</Text>
        </TouchableOpacity>
        <View
          style={[
            style1,
            postion === 1
              ? { height: 200, width: 200, alignSelf: "flex-end" }
              : style1,
          ]}
        ></View>
      </View>
    </View>
  );
};

export default LayoutAnimationView;
