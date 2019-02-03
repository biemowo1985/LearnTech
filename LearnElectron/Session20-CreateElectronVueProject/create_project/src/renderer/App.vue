<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" style="background-color:#E4E7ED">
        <el-row>
          <el-col :span="24">
            <div style="height:70px;padding:15px;">
              <span style='display: inline-block;line-height: normal; vertical-align: middle;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",SimSun,sans-serif; color: #EB0303;'>
                <i class="el-icon-upload" style="font-size:32px"></i>
                <span class="icon-name" style="font-size:20px; margin-left:5px;">Sample Tools</span>
              </span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
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
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "create_project"
};
</script>

<style>
/* CSS */
</style>
