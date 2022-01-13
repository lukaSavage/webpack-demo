<!--
 * @Descripttion: 
 * @Author: lukasavage
 * @Date: 2022-01-13 20:43:55
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-01-13 20:58:09
-->
<template>
    <img src="./assets/aaa.jpg" alt="美少女图" />
    <h1>{{ count }}</h1>
    <div id="container"></div>
</template>

<script setup>
// import Img from './assets/aaa.jpg'
const count = 123
</script>

<style scoped>
#container {
    width: 300px;
    height: 600px;
    background: url('./assets/aaa.jpg');
    background-size: cover;
}
</style>
