/*jshint esversion:6 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todolist-page',
      component: require('@/components/ToDoList/TodoList').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
