import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { GroceriesList } from 'screens/GroceriesList';

type NewsStackParamsList = {
  GroceriesList: undefined;
};

const NewsStackNavigator = createNativeStackNavigator<NewsStackParamsList>();

export function NewsStack() {
  return (
    <NewsStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <NewsStackNavigator.Screen
        name="GroceriesList"
        component={GroceriesList}
      />
    </NewsStackNavigator.Navigator>
  );
}
