import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import CadastroFuncionario from '../views/cadastro-funcionario.vue'
import CadastroPet from '../views/cadastro-pet.vue'
import ListarPets from '../views/listar-pets.vue'
import ViewPet from '../views/view-pet.vue'
import EditarPet from '../views/editar-pet.vue'

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
    path: "/pet/list",
    name: "ListarPets",
    component: ListarPets
  },
  {
    path: "/pet/view",
    name: "ViewPet",
    component: ViewPet
  },
  {
    path: "/pet/edit",
    name: "EditarPet",
    component: EditarPet
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
