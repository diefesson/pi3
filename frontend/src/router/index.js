import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import CadastroFuncionario from '../views/cadastro-funcionario.vue'
import CadastroPet from '../views/cadastro-pet.vue'
import Posts from "../views/posts.vue"
import ViewPost from "../views/view-post.vue"

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
    path: "/posts",
    name: "Posts",
    component: Posts
  },
  {
    path: "/posts/new",
    name: "AddPost",
    component: ViewPost
  },
  {
    path: "/posts/:id(\\d+)",
    name: "UpdatePost",
    component: ViewPost,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
