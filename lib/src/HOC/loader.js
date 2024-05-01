import React from "react";
import { ActivityIndicator, View } from "react-native";

const withLoader = (Component, loading) => {
  return () => {
    if (loading)
      return (
        <View
          style={{
            justifyContent: "center",
            flex: 1,
            alignSelf: "center",
          }}
        >
          <ActivityIndicator size={"large"} color={"blue"} />
        </View>
      );
    return <Component />;
  };
};

export default withLoader;
