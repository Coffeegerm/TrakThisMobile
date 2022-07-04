import { useQuery } from 'react-query';
import { getTasks } from 'services/the-reminds-me-api/tasks';

export const useTasks = () => {
  const { data, isLoading, isError } = useQuery('tasks', getTasks);

  return { tasks: data?.data, isLoading, isError };
};
