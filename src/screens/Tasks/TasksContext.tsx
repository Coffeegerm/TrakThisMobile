import { useTasks } from 'hooks/useTasks';
import React, { createContext, useContext } from 'react';
import { Task } from 'types/Task';
import { WithChildren } from 'types/WithChildren';

type TasksScreenContextType = {
  tasks?: Task[];
  isLoading: boolean;
  isError: boolean;
};

const TasksScreenContext = createContext<undefined | TasksScreenContextType>(
  undefined
);

export const useTasksScreen = () => {
  const context = useContext(TasksScreenContext);
  if (!context) {
    throw new Error('useHomeScreen must used within HomeScreenProvider');
  }
  return context;
};

export const TasksScreenProvider = ({ children }: WithChildren) => {
  const { tasks, isLoading, isError } = useTasks();
  return (
    <TasksScreenContext.Provider
      value={{
        tasks,
        isLoading,
        isError,
      }}>
      {children}
    </TasksScreenContext.Provider>
  );
};
