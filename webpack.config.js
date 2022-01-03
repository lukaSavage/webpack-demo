/*
 * @Descripttion: webpack配置模块
 * @Author: lukasavage
 * @Date: 2022-01-03 10:57:07
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-01-03 11:26:57
 */

const path = require('path');
module.exports = {
    mode: 'development',  // 有两种环境，development开发环境，不压缩代码，productioon.默认，生产环境，会压缩大妈
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'), // 打包后存放的地址
		filename: 'main.js',   // 输出后的文件名称
	},
};
