import React from "react";
import { View, Text, SafeAreaView, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";

const TouchableExample = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonFacebookStyle}
                    activeOpacity={0.5}
                >
                    <Image
                    source={require('../image/facebook.png')}
                    style={styles.buttonImageIconStyle}
                    />
                    <View style = {styles.buttonIconSeparatorStyle}/>
                    <Text style = {styles.buttonTextStyle}>Using Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonGPlusStyle}
                    activeOpacity={0.5}
                >
                    <Image
                    source={require('../image/google-plus.png')}
                    style={styles.buttonImageIconStyle}
                    />
                    <View style = {styles.buttonIconSeparatorStyle}/>
                    <Text style = {styles.buttonTextStyle}>Using Facebook</Text>
                </TouchableOpacity>


            </View>

        </SafeAreaView>
    )
}

export default TouchableExample;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
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

    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,

    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,

    },
    });
