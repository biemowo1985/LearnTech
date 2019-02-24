<template>
  <div id="news">
    {{msg}}
    <el-row>
      <el-button size="small" plain>朴素按钮</el-button>
      <el-button type="primary" size="small" plain>主要按钮</el-button>
      <el-button type="success" size="small" plain>成功按钮</el-button>
      <el-button type="info" size="small" plain>信息按钮</el-button>
      <el-button type="warning" size="small" plain>警告按钮</el-button>
      <el-button type="danger" size="small" plain>危险按钮</el-button>
    </el-row>
    <router-link to="/home">Go home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "News Component"
    };
  }
};
</script>

<style>
/* CSS */
</style>
