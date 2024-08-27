import axios from 'axios';

const externalInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_IOT,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default externalInstance;
