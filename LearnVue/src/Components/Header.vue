<template>
  <div id="header">
    <div id="container">
      <h3>Header Component -- the pass data is: {{HeaderData}}</h3>
      <button @click="homeMethod()">Call Home Method</button>
      &nbsp;
      <button @click="getParent()">Get Parent Object</button>
      &nbsp;
      <button @click="activeGetParent()">Active Get Parent</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "This is header component"
    };
  },
  methods: {
    getParent() {
      this.home.callHomeMethod();
    },
    callSon(data) {
      alert("Method from son, data is:" + data);
    },
    activeGetParent() {
      var dataFromHome = this.$parent.headData;
      this.$parent.callMethod(dataFromHome);
    }
  },
  props: ["HeaderData", "homeMethod", "home"]
};
</script>
<style lang="scss">
#header {
  #container {
    width: 800px;
    height: 100px;
    border: 1px solid red;
  }
}
</style>