import React from 'react';
import { Text, View, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import StackScreen from './StackScreen.js';
import StackScreen2 from './StackScreen2.js';

const Stack = createStackNavigator();

function HomeScreen(props) {
    return (
    <Stack.Navigator initialRouteName="StackScreen2">
        <Stack.Screen name="StackScreen" component={StackScreen} />
        <Stack.Screen name="StackScreen2" component={StackScreen2} />
    </Stack.Navigator>
    );
}

export default HomeScreen;