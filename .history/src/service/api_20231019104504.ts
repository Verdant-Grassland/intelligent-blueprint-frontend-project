import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // 这里的 '/api' 应该匹配你在 Vite 配置中设置的代理路径
});

// 添加拦截器或其他配置

export default instance;
