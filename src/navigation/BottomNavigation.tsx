import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcon } from 'components/Icon';
import React from 'react';
import { CalendarStack, GamesStack, NewsStack, ProfileStack } from './stacks';

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Games"
        component={GamesStack}
        options={{
          tabBarIcon: () => (
            <MaterialIcon size="xl" color="gray" name="check-all" />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsStack}
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
