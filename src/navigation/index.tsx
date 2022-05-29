import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from 'screens/Home';

const RootStackNavigator = createNativeStackNavigator();

export function RootStack() {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen name="Home" component={HomeScreen} />
    </RootStackNavigator.Navigator>
  );
}
