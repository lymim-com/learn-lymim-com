import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 添加此行，可以将服务暴露到整个局域网
  server: { host: '0.0.0.0' },
})
