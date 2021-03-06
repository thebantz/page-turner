import * as React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import HomeScreen from './Components/HomeScreen.js';
import CurrentBook from './Components/CurrentBook.js';
import FindBook from './Components/FindBook.js';
import MakeProgress from './Components/MakeProgress.js';
// import BookList from './Components/BookList.js';
import FlatListDemo from './Components/FlatList.js';

import CurrentContextProvider from './Components/contexts/CurrentContext.js';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const Stack = createStackNavigator();


function TestScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      ></Button>
    </View>
  )
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to More Details"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="See Current Book"
        onPress={() => navigation.navigate('CurrentBook')}
      />
      <Button
        title="Find Next Book"
        onPress={() => navigation.navigate('FindBook')}
      />
      <Button
        title="FindYourNewBook"
        onPress={() => navigation.navigate('FlatListDemo')}
      />

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }}
          component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="CurrentBook" options={{ headerShown: false, title: 'Current' }}
          component={CurrentBook} />
        <Stack.Screen name="FindBook" options={{ headerShown: true }}
          component={FindBook} />
        <Stack.Screen name="MakeProgress" options={{ headerShown: true }}
          component={MakeProgress} />
        <Stack.Screen name="FindYourNewBook" options={{ headerShown: true, title: 'Choose New Book' }}
          component={FlatListDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
