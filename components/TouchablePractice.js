import React from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from 'react';

const TouchablePractice = () => {
    const onPressValue = () => {
        alert('email : ' + inputMail + '\npassword :' + inputPass)

    }

    const [inputMail, setInputMail] = useState('');
    const [inputPass, setInputPass] = useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput placeholder="Email"
                    style={styles.textInputStyle}
                    onChangeText={(inputMail) => { setInputMail(inputMail) }} />
                <TextInput placeholder="Password"
                    style={styles.textInputStyle}
                    onChangeText={(inputPass) => { setInputPass(inputPass) }} />

                <View style={{ paddingTop: 15 }}>
                    <TouchableOpacity
                        style={styles.buttonFacebookStyle}
                        activeOpacity={0.5}
                        onPress={onPressValue}
                    >
                        <Text style={styles.buttonTextStyle}>Submit</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </SafeAreaView>
    )
}

export default TouchablePractice;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },

    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },

    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,

    },

});
