import axios from 'axios';
let baseURL = '地址'
const http = axios.create({
  baseURL: baseURL,
  timeout: 100000
})
// 请求拦截
http.interceptors.request.use(config=>{
  return config
},error=>{
  console.log(error);
})
// 响应拦截
http.interceptors.response.use((res)=>{
  return res.data
})

export default http
