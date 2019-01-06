<template>
    <div id="todo">
        <h1>
            {{msg}}
        </h1>
        <button class="btn btn-success">success</button>
    </div>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    getModel() {
      alert(this.msg);
    }
  }
};
</script>

<style lang="scss">

</style>