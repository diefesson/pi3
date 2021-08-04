import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Cadastro from '../views/cadastro-funcionario.vue'

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
    component: Home // TODO: implement ranking page
  }, {
    path: "/cadastro-funcionario",
    name: "Cadastro",
    component: Cadastro
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
