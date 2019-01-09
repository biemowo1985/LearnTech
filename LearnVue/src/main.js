/*jshint esversion:6 */
import Vue from 'vue';
import App from './App.vue';
import Todo from './sessions/Todolist.vue';
// import './assets/bootstrap/css/bootstrap.min.css'
// import './assets/bootstrap/js/bootstrap.min'


new Vue({
  el: '#todo',
  render: h => h(Todo)
});
