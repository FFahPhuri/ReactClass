import {View, Text} from 'react-native';
import React from 'react';
import { styles } from '../components/style';

const ProfileScreen = () => {
  return (
    <View style={{flex:1, alignItems: 'center'}}>
      <View style={styles.container}>
        <Text style={styles.textTopStyle}>
          ลงทะเบียน
        </Text>
      </View>

      <View>
      <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
    </View>
    </View>
  );
};

export default ProfileScreen;