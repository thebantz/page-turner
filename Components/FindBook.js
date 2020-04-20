import * as React from 'react';
import { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';

function FindBook({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

  })

  return (
    <View style={styles.container}>
      <Text>Find Book Dropdown Place Here</Text>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
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

export default FindBook;