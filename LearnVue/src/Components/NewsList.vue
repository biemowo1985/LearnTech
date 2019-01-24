<template>
  <div id="NewsList">
    <h2>This is News List Page</h2>
    <el-table :data="list" border style="width: 80%" row-style="height:20px" cell-style="padding:1px">
      <el-table-column prop="title" label="Title"></el-table-column>
      <el-table-column prop="address" label="See Details"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "This is News List component",
      list: []
    };
  },
  methods: {
    getNewsList() {
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http.jsonp(api).then(
        res => {
          console.log(res);
          this.list = res.body.result;
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  mounted() {
    this.getNewsList();
  }
};
</script>
<style lang="scss">
</style>