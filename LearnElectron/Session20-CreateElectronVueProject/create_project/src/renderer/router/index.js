/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@/components/Home.vue';
import News from '@/components/News.vue';
import HandleDB from '@/components/HandleNedb.vue';
import RequestAPI from '@/components/RequestAPI.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/apis',
      name: 'APIs',
      component: RequestAPI
    },
    {
      path: '/db',
      name: 'DB',
      component: HandleDB
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
