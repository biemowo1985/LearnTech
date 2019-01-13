<template>
  <div id="details">
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "This is details component"
    };
  },
  mounted() {
      console.log(this.$route.params);
  }
};
</script>
<style lang="scss">

</style>