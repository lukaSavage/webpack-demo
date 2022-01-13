/*
 * @Descripttion: webpack配置模块
 * @Author: lukasavage
 * @Date: 2022-01-03 10:57:07
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-01-11 22:37:22
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development', // 有两种环境，development开发环境，不压缩代码，productioon.默认，生产环境，会压缩大妈
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'), // 打包后存放的地址
		filename: 'main.js', // 输出后的文件名称
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	devServer: {
        port: 8080,                                         // 配置http默认服务的端口号，如果不设置，默认为8080
        open: true,                                         // 自动打开浏览器
        compress: true,                                   // 启动gzip压缩
        // contentBase: path.resolve(__dirname, 'public'),   // static:额外的静态文件更目录，通常指没有被webpack加载打包的图片等资源(先找index.js有没有加载进来，如果没有则会找public文件，还找不到则报错)(现已废弃，请使用static代替)
        static: path.resolve(__dirname, 'public')       //contentBase的替代方案
    }
};
