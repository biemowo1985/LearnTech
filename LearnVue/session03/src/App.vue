<template>
  <div id="app">
    <h1>Session 03</h1>
    <h2>1. Bind Data</h2>
    <hr>
    <div>{{msg}}</div>
    <br>
    <h2>2. Bind Object</h2>
    {{obj.name}} - {{obj.age}} -- {{obj.gender}}
    <ul>
      <li v-for="item in list">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj:{
        name:'Kevin',
        age:18,
        gender:true
      },
      list:['11111','22222','3333333']
    }
  }
}
</script>

<style lang="scss">
</style>
