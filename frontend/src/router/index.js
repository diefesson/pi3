import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import CadastroFuncionario from '../views/cadastro-funcionario.vue'
import CadastroPet from '../views/cadastro-pet.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
