import axios from "axios";
import { API_KEY } from "consts";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

axiosInstance.interceptors.request.use((config) => ({
  ...config,
  params: {
    ...config.params,
    api_key: API_KEY,
  },
}));

// simulating slow network - 1-2s get requests
export const slowGet = <T>(...args: Parameters<typeof axios.get>): Promise<T> =>
  new Promise((resolve) => {
    axiosInstance.get<T>(...args).then((res) => {
      setTimeout(() => resolve(res.data), 1000 + Math.random() * 1000);
    });
  });

export default axiosInstance;
