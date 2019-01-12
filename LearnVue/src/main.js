/*jshint esversion:6 */
import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './Components/Home.vue';
import Header from './Components/Header.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/header', component: Header }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
