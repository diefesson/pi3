import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import CadastroFuncionario from '../views/cadastro-funcionario.vue'
import CadastroPet from '../views/cadastro-pet.vue'
import ListarPets from '../views/listar-pets.vue'
import ViewPet from '../views/view-pet.vue'
import EditarPet from '../views/editar-pet.vue'
import Posts from "../views/posts.vue"
import ViewPost from "../views/view-post.vue"
import userService from "../services/user-service"


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
    component: CadastroPet,
    meta: {
      requireSignIn: true
    }
  },
  {
    path: "/employee/add",
    name: "CadastroFuncionario",
    component: CadastroFuncionario,
    meta: {
      requireSignIn: true
    }
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
    meta: {
      requireSignIn: true
    }
  },
  {
    path: "/posts/new",
    name: "AddPost",
    component: ViewPost,
    meta: {
      requireSignIn: true
    }
  },
  {
    path: "/posts/:id(\\d+)",
    name: "UpdatePost",
    component: ViewPost,
    props: true,
    meta: {
      requireSignIn: true
    }
  },
  {
    path: "/pet/list",
    name: "ListarPets",
    component: ListarPets,
    meta: {
      requireSignIn: true
    }
  },
  {
    path: "/pet/view",
    name: "ViewPet",
    component: ViewPet,
    meta: {
      requireSignIn: true
    }
  },
  {
    path: "/pet/edit",
    name: "EditarPet",
    component: EditarPet,
    meta: {
      requireSignIn: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireSignIn)) {
    if (userService.getSession() == null) {
      next({ name: "Home" })
    }
  }
  next()
})

export default router
