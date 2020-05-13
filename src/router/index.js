import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import ResumeBE from '../views/resumeBackend.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/resume',
    name: 'ResumeBE',
    component: ResumeBE
  }, {
    path: '/resume/:type',
    name: 'Resume',
    component: ResumeBE
  }
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
});

export default router;
