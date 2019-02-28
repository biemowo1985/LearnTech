/* jshint esversion:6 */
import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);

//import db module
import db from './Tools/data-store.js';
Vue.prototype.$db = db;

import fecha from 'fecha';
Vue.prototype.$fecha=fecha;

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app');
