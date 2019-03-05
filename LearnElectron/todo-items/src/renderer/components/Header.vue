<template>
  <div id="header_root">
    <el-row type="flex" justify="end">
      <el-col :span="18">
        <div id="dragable">&nbsp;</div>
      </el-col>
      <el-col :span="6">
        <div id="btn" class="grid-content bg-purple">
          <a href="#" @click.prevent="btnMinimize">
            <i class="el-icon-minus"></i>
          </a>
          <a href="#" @click.prevent="btnClose">
            <i class="el-icon-close"></i>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Custom Header"
    };
  },
  methods: {
    btnMinimize() {
      this.$electron.ipcRenderer.send("window-min");
    },
    btnClose() {
      this.$electron.ipcRenderer.send("window-close");
    }
  }
};
</script>

<style scoped>
/* CSS */
#dragable {
  position: relative;
  -webkit-app-region: drag;
  height: 30px;
}
#btn {
  text-align: right;
  padding-top: 2px;
  padding-right: 1x;
}
#btn a {
  padding: 2px 3px;
  border-radius: 2px;
  border: 1px solid #fbc4c4;
  background-color: #fef0f0;
  color: #f56c6c;
}
#btn a:hover {
  background-color: #f56c6c;
  color: #fff;
  border-radius: 3px;
}
</style>
