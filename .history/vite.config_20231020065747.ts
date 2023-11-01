import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue(), styleImport({ resolves: [VantResolve()]}),],
  // 这个是配置scss
  // @ts-expect-error
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  server: { //主要是加上这段代码
    host: '127.0.0.1',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888',	//实际请求地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }

作者：一只大加号
链接：https://juejin.cn/post/7087783214768619557
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/')
    }
  }
})
