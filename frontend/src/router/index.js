import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import CadastroFuncionario from '../views/cadastro-funcionario.vue'
import CadastroPet from '../views/cadastro-pet.vue'
import PostList from "../views/post-list.vue"

const routes = [
  {
    path: "/",
    redirect: "/home"
  }, {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/pet/add",
    name: "CadastroPet",
    component: CadastroPet
  },
  {
    path: "/employee/add",
    name: "CadastroFuncionario",
    component: CadastroFuncionario
  },
  {
    path: "/post",
    name: "PostList",
    component: PostList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
