import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addBlog',
    name: 'AddBlog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddBlog.vue')
  },
  {
    path: '/reg',
    name: 'Registration',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue')
  },
  {
    path: '/login',
    name: 'Login',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
