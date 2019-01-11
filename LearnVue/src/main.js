/*jshint esversion:6 */
import Vue from 'vue';
import App from './App.vue';
import Todo from './sessions/Todolist.vue';
import RequestData from './sessions/RequestData.vue';
import Home from './Components/Home.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

new Vue({
  el: '#Home',
  render: h => h(Home)
});
