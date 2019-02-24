<template>
  <div id="app">
    <el-container style="height:768px">
      <el-aside width="200px" style="background-color:#E4E7ED">
        <el-row>
          <el-col :span="24">
            <CustomLogo></CustomLogo>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <CustomMenubar></CustomMenubar>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <CustomHeader></CustomHeader>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import Logo from "./components/frame/Logo";
import Menubar from "./components/frame/Menubar";

export default {
  name: "create_project",
  data() {
    return {
      msg: "create_project"
    };
  },
  methods: {

  },
  components: {
    CustomHeader: Header,
    CustomLogo: Logo,
    CustomMenubar: Menubar
  }
};
</script>

<style scoped>
.el-main {
  padding: 0;
}
/* CSS */
</style>
