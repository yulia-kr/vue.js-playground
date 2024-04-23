import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import WelcomePage from '../components/WelcomePage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/welcome', name: 'welcome', component: WelcomePage, props: true }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
