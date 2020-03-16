import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

interface Request {
  method?: 'get' | 'post' | 'put' | 'delete' | 'patch',
  url: string,
  data?: any
}

export const sendRequest = ({method = 'get', url, data}: Request) => instance({url, method, data}).then(response => response.data);