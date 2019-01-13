<template>
  <div id="details">
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "This is product details component"
    };
  },
  mounted() {
      console.log(this.$route.query);
  }
};
</script>
<style lang="scss">

</style>