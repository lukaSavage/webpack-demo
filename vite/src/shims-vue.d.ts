/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-01-16 14:19:43
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-01-16 14:20:52
 */
declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
