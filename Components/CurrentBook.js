import * as React from 'react';
import { useState } from "react";
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

function CurrentBook({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.touchOpText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3700B3',
  },
  touchOpText: {
    textAlign: 'center',
    color: '#BB86FC',
    fontSize: 18,
  },
  button: {
    alignItems: "center",
    width: '30%',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    padding: 10,
  },
});

export default CurrentBook;