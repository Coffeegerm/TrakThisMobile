import { Task } from 'types/Task';
import { thatRemindsApiClient } from './index';

export const getTasks = () => thatRemindsApiClient.get<Task[]>('/task');
