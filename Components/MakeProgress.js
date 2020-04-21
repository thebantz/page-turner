import * as React from 'react';
import { useState } from "react";
import { TextInput, Modal, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

function MakeProgress({ navigation }) {
  const [value, onChangeText] = useState('');
  const [cLength, setcLength] = useState(278);
  const bookLength = 486;
  const progress = Math.floor((cLength / bookLength) * 100);
  const duration = 'in 2 days';


  const [modalVisible, setModal] = useState(true);

  openModal = () => setModal(true);
  closeModal = () => setModal(false);

  return (
    <View style={styles.container}>
      <ProgressCircle
        percent={progress}
        radius={100}
        borderWidth={16}
        color="#3399FF"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={{ fontSize: 48 }}>{`${progress}%`}</Text>
        <Text style={{ fontSize: 20 }}>{duration}</Text>
      </ProgressCircle>

      <Modal
        visible={modalVisible}
        animationType={'slide'}
        onRequestClose={() => closeModal()}
      >
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.textStyle}>What page are you on?</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => onChangeText({ text })}
              // onChangeText={(text) => onChangeText({ text })}
              value={value}
              placeholder="BOOKMARK YOUR PROGRESS"
            />
            <Button
              onPress={() => {
                setcLength(parseInt(value.text) || cLength);
                closeModal();
              }}
              title="UPDATE"
            >
            </Button>
          </View>
        </View>
      </Modal>
      <Button
        onPress={() => {
          openModal();
        }}
        title="UPDATE PROGRESS"
      />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3700B3',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    alignItems: 'center',
  },
  textInputStyle: {
    width: 240,
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
  },
  textStyle: {
    padding: 10,
    fontSize: 30
  },
});


export default MakeProgress;