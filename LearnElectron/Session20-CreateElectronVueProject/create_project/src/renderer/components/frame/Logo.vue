<template>
  <div id="news_root">
    <div id="content">
      <span id="content-span">
        <i class="el-icon-upload"></i>
        <span class="icon-name">Sample Tools</span>
      </span>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
/* CSS */
#content {
  height: 60px;
  padding: 15px;
  border-bottom: 1px solid red;
  -webkit-app-region: drag;
}
#content-span {
  display: inline-block;
  line-height: normal;
  vertical-align: middle;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "SimSun", "sans-serif";
  color: #eb0303;
}
#content-span i.el-icon-upload {
  font-size: 32px;
  margin-top: 10px;
}
#content-span span.icon-name {
  font-size: 21px;
}
</style>