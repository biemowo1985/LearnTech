<template>
  <div id="home">
    <v-header :HeaderData='headData' :homeMethod='callHomeMethod' :home='this'></v-header>
    <h2>{{msg}}</h2>
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
    callHomeMethod() {
      alert("I am a home method");
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