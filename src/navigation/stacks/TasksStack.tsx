import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TasksScreen } from 'screens/Tasks';

type TasksStackNavigatorScreens = {
  TasksList: undefined;
};

const TasksStackNavigator =
  createNativeStackNavigator<TasksStackNavigatorScreens>();

export function TasksStack() {
  return (
    <TasksStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TasksStackNavigator.Screen name="TasksList" component={TasksScreen} />
    </TasksStackNavigator.Navigator>
  );
}
