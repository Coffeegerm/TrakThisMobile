import { Task } from 'types/Task';
import { thatRemindsApiClient } from './index';

export const getTasks = () => thatRemindsApiClient.get<Task[]>('/task');

export const upsertTask = (task: Omit<Task, 'id'>) =>
  thatRemindsApiClient.post<Task>('/task', task);
