import React from 'react';
import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './components/HomeScreen.js'
import DetailsScreen from './components/DetailsScreen.js'

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'red'
  }
})