import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue()],
  // 这个是配置scss
  // @ts-expect-error
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  server: { //主要是加上这段代码 进后端了吗 请求  我这个写了，代理，还是没反应 缓存 dailimeishengx
    proxy: {
      '/api': {
        target: 'http://localhost:10010',	//实际请求地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/')
    }
  }
})
