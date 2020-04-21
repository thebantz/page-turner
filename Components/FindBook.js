import * as React from 'react';
import { useState, useEffect } from "react";
import { TextInput, FlatList, ActivityIndicator, Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import yourAPIKey from './config.js';


function FindBook({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, onChangeText] = useState('Useless Placeholder');

  useEffect(() => {
    const query = 'javascript';
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${yourAPIKey}&maxResults=10`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.items);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  });

  return (
    <View style={styles.container}>
      <Text>Find Book Dropdown Place Here</Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder="Find book"
      />
      {isLoading ? <ActivityIndicator /> :
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Image source={{ uri: item.volumeInfo.imageLinks.thumbnail }} style={{ width: 100, height: 100 }} />
          )}
        />
      }
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
  gallery: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  column: {
    width: 50,
    padding: 5
  },
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    width: 200,
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default FindBook;