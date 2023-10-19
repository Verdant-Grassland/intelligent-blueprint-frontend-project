import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(()=>{
  return {
    plugins: [vue()],
    resolve: {
      //配置文件扩展名
      alias: {
        '@': resolve(__dirname, 'src'),
        '@components': resolve(__dirname, 'src/components')
      }
    },
  }

})
