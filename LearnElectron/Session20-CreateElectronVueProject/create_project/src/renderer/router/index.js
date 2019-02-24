/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@/components/Home.vue';
import News from '@/components/News.vue';

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
      path: '*',
      redirect: '/'
    }
  ]
});
