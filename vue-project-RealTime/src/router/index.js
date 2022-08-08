import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../components/home.vue'),
      beforeEnter(to,from,next){
        if(!store.getters.pollToken){
          next('/login')
        }else{
          next();
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login.vue'),
   
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../components/about.vue'),
      beforeEnter(to,from,next){
        if(!store.getters.pollToken){
          next('/login')
        }else{
          next();
        }
      }
    },

    {
      path: '/add',
      name: 'add',
      component: () => import('../components/add.vue'),
      beforeEnter(to,from,next){
        if(!store.getters.pollToken){
          next('/login')
        }else{
          next();
        }
      }
    }
  ]
})

export default router
