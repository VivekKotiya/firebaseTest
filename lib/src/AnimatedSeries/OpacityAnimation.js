import React from "react";
import {
  TouchableWithoutFeedback,
  Animated,
  TouchableHighlight,
} from "react-native";

const OpacityAnimation = () => {
  const op = new Animated.Value(1);

  onPress = () => {
    Animated.timing(op, {
      toValue: 0,
      duration: 1000,
      delay: 10000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(op, {
        toValue: 1,
        duration: 1000,
        delay: 10000,
        useNativeDriver: true,
      }).start();
    });
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={{ opacity: op, height: 50, width: 50, backgroundColor: "red" }}
      ></Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default OpacityAnimation;
