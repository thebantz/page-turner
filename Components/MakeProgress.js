import * as React from 'react';
import { useState } from "react";
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

function MakeProgress({ navigation }) {
  const progress = 57;
  const duration = 'in 2 days'
  return (
    <View style={styles.container}>
      <ProgressCircle
        percent={30}
        radius={100}
        borderWidth={16}
        color="#3399FF"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={{ fontSize: 48 }}>{`${progress}%`}</Text>
        <Text style={{ fontSize: 20 }}>{duration}</Text>
      </ProgressCircle>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3700B3',
  },
});


export default MakeProgress;