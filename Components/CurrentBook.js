import * as React from 'react';
import { useState } from "react";
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={styles.avatar}
      source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ma_tiax/128.jpg' }}
    />
  );
}

function CurrentBook({ navigation }) {
  return (
    <View style={styles.container}>
      <LogoTitle />
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
  avatar: {
    width: 50,
    height: 50,
    marginBottom: 10
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