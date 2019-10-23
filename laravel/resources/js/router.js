import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

// Components
import ResumeList from './pages/ResumeList.vue';
import Login from './pages/Login.vue';
import SystemError from './pages/errors/System.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: ResumeList
  },
  {
    path: '/login',
    component: Login,
    beforeEnter(to, from, next) {
      if (store.getters['auth/isLoggedIn']) {
        next('/');
      } else {
        next();
      }
    }
  },
  {
    path: '/500',
    component: SystemError
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
