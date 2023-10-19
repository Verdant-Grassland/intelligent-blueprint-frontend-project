import { defineConfig } from 'vite'
import { resolve } from 'path'
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
// export default defineConfig({
//   plugins: [vue()],
//   // server: {
//   //   'proxy': {
//   //     '/api': {
//   //       target: 'http://localhost:10010',
//   //       changeOrigin: true,
//   //       rewrite: path => path.replace(/^\/api/, '')
//   //     }
//   //   }
//   // }
// })
