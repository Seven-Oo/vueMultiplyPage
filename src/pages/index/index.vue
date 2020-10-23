<template>
  <div id="app">
    <img alt="logo" src="../../assets/logo.png">
    <div> {{title}} </div>
    <a href="test.html">去测试页</a>
    <a href="homework.html">去作业页</a>
    <HelloWorld msg="Welcome to Your Multipage Web Page!" />
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      title: "这是首页"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
