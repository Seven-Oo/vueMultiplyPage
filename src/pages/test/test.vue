<template>
  <div id="test">
    <div>{{ msg }}</div>
    <a href="index.html">回首页</a>
    <a href="homework.html">去作业页</a>
    <el-tag type="success">标签二</el-tag>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: '这是测试页'
    }
  }
}
</script>

<style>
</style>