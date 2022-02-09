import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AboutScreen = ({ route }) => {
  const { email } = route.params; //Navigation.params แต่มันนิยมใช้ สำหรับไปอีกหน้านึง
  return (
    <View style={styles.container}>
      <Text>AboutScreen</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
