import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import { styles } from '../components/style';

const Stack = createStackNavigator();

const SettingScreen = ({navigation}) => {
  return (
    <View style = {{flex:1, alignItems: 'center'}}>
      <View style={styles.container}>
        <Text style={styles.textTopStyle}>
          SETTING SCREEN
        </Text>
        <Button
          title="Go to HOME TAB"
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <Button title="Go to NEWS SCREEN" />
        <Button
          title="Go to PROFILE SCREEN"
          onPress={() => navigation.navigate('ProfileScreen')}
        />
      </View>
      <View>
        <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
      </View>
    </View>
  );
};

export default SettingScreen;
