<!--
 * @Descripttion: 
 * @Author: lukasavage
 * @Date: 2022-01-13 20:43:55
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-01-16 14:49:37
-->
<template>
    <img src="./assets/aaa.jpg" alt="美少女图" />
    <h1>{{ count }}</h1>
    <div id="container"></div>
</template>

<script setup lang='ts'>
// import Img from './assets/aaa.jpg'
import { onMounted } from 'vue'
const count = 123
onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => console.log(json))
    console.log(11111)
})
</script>

<style scoped>
#container {
    width: 300px;
    height: 600px;
    background: url('./assets/aaa.jpg');
    background-size: cover;
}
</style>
