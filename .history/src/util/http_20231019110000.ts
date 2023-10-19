import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    // 在请求头添加 token，或者其他处理
    return config;
  },
  (err) => {
    // 请求失败的处理
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    // 请求成功的处理
    return response;
  },
  (err) => {
    // 请求失败的处理
    return Promise.reject(err);
  }
);

const callapi = (method = "GET", url, data = {}) => {
  return instance({
    method,
    url,
    params: method === "GET" ? data : {},
    data: method === "POST" ? data : {},
  });
};

export const getapi = (url, data) => callapi("GET", url, data);
export const postapi = (url, data) => callapi("POST", url, data);
