<template>
  <div id="home">
    <h2>{{msg}}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "This is home component"
    };
  }
};
</script>
<style lang="scss">
#home {
  h2 {
    color: red;
  }
}
</style>