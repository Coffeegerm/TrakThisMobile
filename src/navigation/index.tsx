import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from 'screens/Home';

type RootStackNavigatorScreens = {
  Home: undefined;
};

const RootStackNavigator =
  createNativeStackNavigator<RootStackNavigatorScreens>();

export function RootStack() {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen name="Home" component={HomeScreen} />
    </RootStackNavigator.Navigator>
  );
}
