import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  CalendarStack,
  GroceriesStack,
  ProfileStack,
  TasksStack,
} from './stacks';

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Tasks" component={TasksStack} />
      <Tab.Screen name="Groceries" component={GroceriesStack} />
      <Tab.Screen name="Calendar" component={CalendarStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
