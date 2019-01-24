/*jshint esversion:6 */
import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Home from './Components/Home.vue';
import Header from './Components/Header.vue';
import Details from './Components/Details.vue';
import ProductDetails from './Components/ProductDetails.vue';
import Newslist from './Components/NewsList.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/header', component: Header },
  { path: '/Newslist', component: Newslist },
  { path: '/details/:id', component: Details },
  { path: '/prodetails', component: ProductDetails },
  { path: '*', direct: '/home' }  //default direct to home
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
