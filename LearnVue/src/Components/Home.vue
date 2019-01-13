<template>
  <div id="home">
    <v-header ref="header" :HeaderData="headData" :homeMethod="callHomeMethod" :home="this"></v-header>
    <h2>{{msg}}</h2>
    <button @click="getSon()">get son content</button>
    <br>
    <hr>
    <br>
    <ul>
      <li v-for="(item,key) in newsList" :key='key'>
        <router-link :to="'/details/'+key">{{key}} -- {{item}}</router-link>
      </li>
    </ul>

    <br>
    <hr>
    <br>
    <ul>
      <li v-for="(item,key) in newsList" :key='key'>
        <router-link :to="'/prodetails?pid='+key">{{key}} -- {{item}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "./Header";
export default {
  data() {
    return {
      msg: "This is home component",
      headData: "Home Data",
      newsList:['111','222','333','444','555']
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