import axios, { AxiosInstance } from "axios";

import { API_KEY } from "@/consts";

const axiosMovieDbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

axiosMovieDbInstance.interceptors.request.use((config) => ({
  ...config,
  params: {
    ...config.params,
    api_key: API_KEY,
  },
}));

const axiosJsonServerInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

// simulating slow network - 1-2s get requests
const generateSlowGet =
  (instance: AxiosInstance, minDelayMs = 1000) =>
  <T>(...args: Parameters<typeof axios.get>): Promise<T> =>
    new Promise((resolve) => {
      instance.get<T>(...args).then((res) => {
        setTimeout(() => resolve(res.data), minDelayMs + Math.random() * 1000);
      });
    });

export const slowGet = generateSlowGet(axiosMovieDbInstance);
export const jsonServerSlowGet = generateSlowGet(axiosJsonServerInstance);

export default axiosMovieDbInstance;
