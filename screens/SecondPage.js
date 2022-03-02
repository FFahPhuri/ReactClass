import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SecondPage = ({ route }) => {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {" "}
        REACT - NATIVE PASS VALUE FROM ONE SCREEN{" "}
      </Text>{" "}
      <Text style={styles.textStyle}>
        {" "}
        Values passed from FIRST PAGE: {name}{" "}
      </Text>{" "}
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },

  heading: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },

  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});
