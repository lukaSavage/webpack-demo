/*
 * @Descripttion: vite配置文件
 * @Author: lukasavage
 * @Date: 2022-01-13 20:38:39
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-01-13 20:39:51
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
});
