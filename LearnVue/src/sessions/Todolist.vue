<template>
  <div id="todo">
    <div>
      <h1>{{msg}}</h1>
      <button class="btn btn-success">success</button>
    </div>
    <br>
    <div>
      <input type="text" v-model="todoItem">
      <button @click="addItems">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="(value, key) in todoList" v-bind:key="key">
          {{value}} -----
          <button @click="deleteItem(key)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      todoItem: "",
      todoList: []
    };
  },
  methods: {
    getModel() {
      alert(this.msg);
    },
    addItems() {
      this.todoList.push(this.todoItem);
      this.todoItem = "";
    },
    deleteItem(key) {
      if (this.todoList.length > key) {
        this.todoList.splice(key, 1);
      }
    }
  }
};
</script>

<style lang="scss">
</style>