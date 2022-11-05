import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import SystemInformation from '../components/SystemInformation.vue'
import Main from '../components/Main.vue'
import Login from '../components/Login.vue'
import Secret from '../components/Secret.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/system',
        name: 'System',
        component: SystemInformation,
      },
      {
        path: '/about',
        name: 'About',
        component: About,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/secret',
        name: 'Secret',
        component: Secret,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/system',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
