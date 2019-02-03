<template>
  <div id="home">
    {{msg}}
    <div>
      <button @click="sendMsg">Send message to main</button>
      <a href="http://www.baidu.com" @click.prevent="openUrl($event)">Baidu.com</a>
      <button @click="readFile">Use node module</button>
      <div id="packageContent" style="width:600px; height:200px; background-color:#abbcd3"></div>
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
    openUrl(event) {
      var url = event.srcElement.href;
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
