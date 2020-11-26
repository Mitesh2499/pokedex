import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {DetailScreen, HomeScreen} from '../screens/Home';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export {HomeStack};
