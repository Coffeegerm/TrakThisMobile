import axios from 'axios';

export const thatRemindsApiClient = axios.create({
  baseURL: 'http://localhost:3000',
});
