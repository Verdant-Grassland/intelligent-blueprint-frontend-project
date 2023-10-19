import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(()=>{
  return {
    plugins: [vue()],
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
