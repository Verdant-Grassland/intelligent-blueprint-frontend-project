import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "@/assets/css/global.css"

axios.defaults.baseURL = '/api';

createApp(App).use(router).use(ElementPlus).mount('#app')
