import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from '@/stores/user'
import router from '@/router'
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
// 创建axios实例
const request = axios.create({
  baseURL,
  timeout: 5000
})
// axios请求拦截器
request.interceptors.request.use(config => {
  // 1. 从pinia获取token数据
  const userStore=useUserStore()
  // 2. 按照后端的要求拼接token数据
  const token=userStore.userInfo.token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
request.interceptors.response.use(res => res.data, e => {
  const userStore=useUserStore()
  //统一错误提示
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  //401token失效处理
  //清楚本地数据
  //跳转登陆页
  if(e.response.status===401){
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})


export default request
export { baseURL }