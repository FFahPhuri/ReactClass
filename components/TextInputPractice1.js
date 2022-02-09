import React from "react";
import { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Image, StyleSheet, Button } from "react-native";

const TextInputPractice1 = () => {
    const checkValue = () => {
        if (!inputName.trim()) {
            alert('Please Enter Name');
            return
        }
        if (!inputMail.trim()) {
            alert('Please Enter Email');
            return
        }
        alert('Success')

    }

    const [inputName, setInputName] = useState('');
    const [inputMail, setInputMail] = useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput placeholder="Enter Name."
                    style={styles.textInputStyle}
                    onChangeText={(inputName) => { setInputName(inputName) }} />
                <TextInput placeholder="Enter Email"
                    style={styles.textInputStyle}
                    onChangeText={(inputMail) => { setInputMail(inputMail) }} />

                <View style={{ marginTop: 30 }}>
                    <Button
                        onPress={checkValue}
                        title="Submit"
                        color="#8a8bf4" />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default TextInputPractice1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },
});
