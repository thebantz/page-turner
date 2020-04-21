import * as React from 'react';
import { useState } from "react";
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';


// const progressPercent = this.props.navigation.state.params.progress;

function Avatar() {
  return (
    <Image
      style={styles.avatar}
      source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
    />
  );
}

function BookCover() {
  return (
    <Image
      style={styles.book}
      source={require('./Assets/f451v2.jpg')}
    />
  )
}

function Progress() {
  return (
    <View style={styles.viewProgress}>
      <Text style={styles.textProgress}>57%</Text>
      <Text style={styles.detailsProgress}>in 2 days</Text>
    </View>
  )
}

function TitleAuthor() {
  return (
    <View style={styles.divTitleAuthor}>
      <Text style={styles.titleAuthor}>Fahrenheit 451</Text>
      <Text style={styles.titleAuthor}>Ray Bradbury</Text>
    </View>
  )
}


function CurrentBook({ navigation }) {
  return (
    <View style={styles.container}>
      <Avatar onPress={() => navigation.navigate('Details')} />
      <Progress />
      <BookCover />
      <TouchableOpacity
        style={styles.progressButton}
        onPress={() => navigation.navigate('MakeProgress')}
      >
        <Text style={styles.touchOpText}>Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => navigation.navigate('FindYourNewBook')}
      >
        <Text style={styles.touchOpText}>Done</Text>
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
    flex: 1,
    width: 75,
    height: 75,
    marginBottom: 10,
    left: 56,
    top: 701,
    position: 'absolute'
  },
  book: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    resizeMode: 'contain',
    width: 308,
    height: 564,
    position: 'absolute',
    marginBottom: 10,
  },
  touchOpText: {
    textAlign: 'center',
    color: '#BB86FC',
    fontSize: 18,
  },
  titleAuthor: {
    color: '#BB86FC',
    fontSize: 18,
    textAlign: 'center',
  },
  divTitleAuthor: {
    position: 'absolute',
    width: 308,
    height: 56,
    left: 34,
    top: 619,
  },
  progressButton: {
    alignItems: "center",
    width: '28%',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    padding: 10,
    position: 'absolute',
    left: 145,
    top: 719
  },
  doneButton: {
    alignItems: "center",
    width: '20%',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    padding: 10,
    position: 'absolute',
    left: 275,
    top: 719
  },
  viewProgress: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    width: 200,
    height: 100,
    left: 60,
    top: 120
  },
  textProgress: {
    fontSize: 80,
    marginEnd: 20,
    color: '#FFFFFF',
  },
  detailsProgress: {
    fontSize: 20,
    color: '#FFFFFF',
  }
});

export default CurrentBook;