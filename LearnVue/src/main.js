/*jshint esversion:6 */
import Vue from 'vue';
import App from './App.vue';
import Todo from './sessions/Todolist.vue';
import RequestData from './sessions/RequestData.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

new Vue({
  el: '#RequestData',
  render: h => h(RequestData)
});
