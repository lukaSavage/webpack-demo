/*
 * @Descripttion: 让tyescript识别并支持.vue文件
 * @Author: lukasavage
 * @Date: 2022-01-14 09:41:49
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-01-14 09:50:26
 * @FilePath: \vite\src\sham-vue.d.ts
 */

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
