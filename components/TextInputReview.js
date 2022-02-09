import React from 'react';
// import all use component
import { useState } from 'react';
import { StyleSheet, TextInput, View, Text, SafeAreaView } from 'react-native';


const TextInputReview = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>{inputValue}</Text>
        <TextInput
          placeholder="Enter Text"
          style={styles.input}
          onChangeText={(inputValue) => { setInputValue(inputValue) }}
        />
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#ffffff'
  },
});
export default TextInputReview;
