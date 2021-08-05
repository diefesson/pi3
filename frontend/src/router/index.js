import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import CadastroFuncionario from '../views/cadastro-funcionario.vue'
import CadastroPet from '../views/cadastro-pet.vue'

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
  }, 
  {
    path: "/cadastro-pet",
    name: "CadastroPet",
    component: CadastroPet
  },
  {
    path: "/cadastro-funcionario",
    name: "CadastroFuncionario",
    component: CadastroFuncionario
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
