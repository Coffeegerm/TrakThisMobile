import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GroceriesList } from 'screens/GroceriesList';

type GroceriesStackNavigatorScreens = {
  GroceriesList: undefined;
};

const GroceriesStackNavigator =
  createNativeStackNavigator<GroceriesStackNavigatorScreens>();

export function GroceriesStack() {
  return (
    <GroceriesStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <GroceriesStackNavigator.Screen
        name="GroceriesList"
        component={GroceriesList}
      />
    </GroceriesStackNavigator.Navigator>
  );
}
