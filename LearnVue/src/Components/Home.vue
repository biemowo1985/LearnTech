<template>
  <div id="home">
    <v-header ref="header" :HeaderData="headData" :homeMethod="callHomeMethod" :home="this"></v-header>
    <h2>{{msg}}</h2>
    <button @click="getSon()">get son content</button>
  </div>
</template>
<script>
import Header from "./Header";
export default {
  data() {
    return {
      msg: "This is home component",
      headData: "Home Data"
    };
  },
  methods: {
    callMethod(data) {
      alert("I am a home method, data is: " + data);
    },
    callHomeMethod() {
      alert("I am a home method");
    },
    getSon() {
      var msgFromSon = this.$refs.header.msg;
      this.$refs.header.callSon(msgFromSon);
    }
  },
  components: { "v-header": Header }
};
</script>
<style lang="scss">
#home {
  h2 {
    color: red;
  }
}
</style>