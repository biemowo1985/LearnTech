<template>
  <div id="header_root">
    <el-row type="flex" justify="end">
      <el-col :span="21">
        <div id="dragable">&nbsp;</div>
      </el-col>
      <el-col :span="3">
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
  height: 50px;
}
#btn {
  text-align: right;
  padding-top: 15px;
  padding-right: 10px;
}
#btn a {
  padding: 6px 9px;
  border-radius: 3px;
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
