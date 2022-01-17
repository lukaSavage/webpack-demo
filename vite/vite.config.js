/*
 * @Descripttion: vite配置文件
 * @Author: lukasavage
 * @Date: 2022-01-13 20:38:39
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-01-16 14:46:50
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
    server: {
        proxy: {
          '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          }
        }
      },
});
