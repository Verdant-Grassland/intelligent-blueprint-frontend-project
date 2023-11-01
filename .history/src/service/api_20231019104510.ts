import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', 
});

// 添加拦截器或其他配置

export default instance;
