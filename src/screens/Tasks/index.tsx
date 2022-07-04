import React from 'react';
import { Tasks } from 'views/Tasks';
import { TasksScreenProvider } from './TasksContext';

export const TasksScreen = () => {
  return (
    <TasksScreenProvider>
      <Tasks />
    </TasksScreenProvider>
  );
};
