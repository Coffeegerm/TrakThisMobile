import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Events } from '../../screens/Events';

type CalendarStackNavigatorScreens = {
  Events: undefined;
};

const CalendarStackNavigator =
  createNativeStackNavigator<CalendarStackNavigatorScreens>();

export function CalendarStack() {
  return (
    <CalendarStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CalendarStackNavigator.Screen name="Events" component={Events} />
    </CalendarStackNavigator.Navigator>
  );
}
