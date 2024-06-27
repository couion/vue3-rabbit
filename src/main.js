
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入全局组件插件
import { componentPlugin } from '@/components'
import  PiniaPluginPersistedstate  from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'
const app = createApp(App)
app.use(componentPlugin)
const pinia=createPinia()
//注册持久化插件
pinia.use(PiniaPluginPersistedstate)
app.use(pinia)
app.use(router)

app.mount('#app')
