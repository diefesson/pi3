import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: "/home",
    name: "Home",
    component: Home
  }, {
    path: "/ranking",
    name: "Ranking",
    component: Home // todo: replace with correct page
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
