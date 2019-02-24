<template>
  <div id="home">
    {{msg}}
    <div>
      <button @click="sendMsg">Send message to main</button>
      <a href="http://www.baidu.com" @click="openUrl($event)">Baidu.com</a>
      <button @click="readFile">Use node module</button>
      <div id="packageContent" style="width:600px; height:200px; background-color:#abbcd3"></div>

      <router-link to="/news">Goto News</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Home Component"
    };
  },
  methods: {
    sendMsg() {
      this.$electron.ipcRenderer.send("toMain", "data from Renderer");
    },
    openUrl(e) {
      e.preventDefault();
      var url = e.srcElement.href;
      this.$electron.shell.openExternal(url);
    },
    readFile() {
      var fs = require("fs");
      fs.readFile("package.json", (err, data) => {
        var contentDiv = document.querySelector("#packageContent");
        contentDiv.innerHTML = data;
        console.log(data.toString());
      });
    }
  }
};
</script>

<style>
/* CSS */
</style>
