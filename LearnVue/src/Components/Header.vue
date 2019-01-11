<template>
  <div id="header">
    <div id='container'>
        <h3>Header Component -- the pass data is: {{HeaderData}}</h3>
        <button @click='homeMethod()'>Call Home Method</button>
        &nbsp;
        <button @click='getParent()'>Get Parent Object</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "This is home component"
    };
  },
  methods:{
      getParent(){
          this.home.callHomeMethod();
      }
  },
  props:['HeaderData','homeMethod','home']
};
</script>
<style lang="scss">
#header {
    #container{
        width:800px;
        height: 100px;
        border:1px solid red;
    }
}
</style>