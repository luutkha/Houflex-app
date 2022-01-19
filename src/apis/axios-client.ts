import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API } from 'constants/api';

const axiosClient = axios.create({
  baseURL: API.BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Do something before request is sent
    // const accessToken: string | null = sessionStorage.getItem('access_token');
    
    // if (accessToken) {
    //   if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`;
      
    // }
    return config;

  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
