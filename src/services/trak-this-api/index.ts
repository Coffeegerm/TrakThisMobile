import axios from 'axios';

export const trakThisAPIClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});
