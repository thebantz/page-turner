import * as React from 'react';
import { useState } from "react";
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';

function MakeProgress({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Mark your book progress here!</Text>
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