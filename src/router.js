import Vue from 'vue'
import VueRouter from 'vue-router'
import Wiki from '@/views/Wiki'
import Admin from '@/views/Admin'
import Login from '@/components/Login'
import store from '@/store.js'
import { config } from '@/config.js'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'Wiki',
    component: Wiki,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: config.frontendBaseUrl,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(store.getters.isLoggedIn){
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
