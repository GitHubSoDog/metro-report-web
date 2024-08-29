import axios from 'axios';

const ssrInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ssrInstance;
