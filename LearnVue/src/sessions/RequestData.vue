<template>
  <div id="divRequestData">
    <button @click="getData">Get Data</button>
    <br/>
    <hr>
    <ul>
        <li v-for='item in list' :key='item.id'>
            {{item.femalename}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RequestData",
  data() {
    return {
      title: "RequestData",
      list: []
    };
  },
  methods: {
    getData() {
      var api = "https://www.apiopen.top/femaleNameApi?page=1";
      this.$http.get(api).then(
        res => {
            console.log(res.body.code);
          if (res.body.code == 200) {
            this.list = res.body.data;
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style lang="">
</style>