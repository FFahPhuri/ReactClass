import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/react_logo.png")}
        style={{ width: 30, height: 40 }}
      />
    </View>
  );
};

export default Logo;
