<template>
  <div id="news_root">
    <el-menu
      default-active="1"
      background-color="#E4E7ED"
      text-color="#fff"
      active-text-color="#EB0303"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">Nav 1</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-setting"></i>
        <span slot="title">Nav 2</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">Nav 3</span>
      </el-menu-item>
      <el-menu-item index="4" @click="handleDB">
        <i class="el-icon-setting"></i>
        <span slot="title">Handle DB</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleDB() {
      this.$router.push("/db");
    }
  }
};
</script>

<style scoped>
/* CSS */
li.is-active {
  background-color: rgb(255, 228, 225) !important;
}
</style>