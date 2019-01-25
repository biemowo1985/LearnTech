/*jshint esversion:6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../Components/Home.vue';
import Header from '../Components/Header.vue';
import Details from '../Components/Details.vue';
import ProductDetails from '../Components/ProductDetails.vue';
import Newslist from '../Components/NewsList.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/header', component: Header },
  { path: '/Newslist', component: Newslist },
  { path: '/details/:id', component: Details },
  { path: '/prodetails', component: ProductDetails },
  { path: '*', direct: '/home' }  //default direct to home
];

const router = new VueRouter({
  mode:'history',
  routes
});

export default router;