import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
