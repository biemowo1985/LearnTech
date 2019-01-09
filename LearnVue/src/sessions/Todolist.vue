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
      <h2>In process</h2>
      <ul>
        <li v-for="(value, key) in todoList" v-bind:key="key" v-if="!value.completed">
          <input type="checkbox" v-model="value.completed">
          {{value.title}} -----
          <button @click="deleteItem(key)">Delete</button>
        </li>
      </ul>
    </div>
    <br>
    <hr>
    <div>
      <h2>Completed</h2>
      <ul>
        <li v-for="(value, key) in todoList" v-bind:key="key" v-if="value.completed">
          <input type="checkbox" v-model="value.completed">
          {{value.title}} -----
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
    addItems() {
      var itemObj = {
        title: this.todoItem,
        completed: false
      };
      this.todoList.push(itemObj);
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