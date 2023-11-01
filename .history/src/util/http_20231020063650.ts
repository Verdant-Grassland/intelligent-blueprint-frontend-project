import axios from "axios";
import { ElMessage } from "element-plus";
// 第一步创建axios对象
const request = axios.create({
  // 基础路径
  baseURL: '/api',
  timeout: 5000, //设置请求超时时间5s
})

// 第二部：request实例添加请求和响应拦截器
request.interceptors.request.use((config) => {
  // config配置对象，headers属性请求头，经常给服务器端携带公共参数
  // config.headers.token = useUerStore()?.token
  // 需要返回配置对象
  return config
})

// 第三步：配置响应拦截器
request.interceptors.response.use(
  (response) => {
      // 成功回调
      return response.data
  },
  (error) => {
      // 失败回调：处理http网络错误
      // 定义一个变量：存储网络错误信息
      let message = ''
      const status = error.response.status
      switch (status) {
          case 401:
              message = 'token过期'
              break
          case 403:
              message = '无权访问'
              break
          case 404:
              message = '请求地址错误'
              break
          case 500:
              message = '服务器出现问题'
              break
          default:
              message = '网络出现问题'
              break
      }
      // 提示错误信息
      ElMessage({
          type: 'error',
          message,
      })
      return Promise.reject(error)
  },
)

export default request