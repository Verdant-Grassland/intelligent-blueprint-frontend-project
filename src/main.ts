import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'//国际化
import "@/assets/css/global.scss"

const app = createApp(App)

app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')