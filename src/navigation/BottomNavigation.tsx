import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcon } from 'components/Icon';
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
      <Tab.Screen
        name="Tasks"
        component={TasksStack}
        options={{
          tabBarIcon: () => (
            <MaterialIcon size="xl" color="gray" name="check-all" />
          ),
        }}
      />
      <Tab.Screen
        name="Groceries"
        component={GroceriesStack}
        options={{
          tabBarIcon: () => (
            <MaterialIcon size="xl" color="gray" name="food-apple" />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarStack}
        options={{
          tabBarIcon: () => (
            <MaterialIcon size="xl" color="gray" name="calendar-today" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: () => <MaterialIcon size="xl" color="gray" name="home" />,
        }}
      />
    </Tab.Navigator>
  );
}
