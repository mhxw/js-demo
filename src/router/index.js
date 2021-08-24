import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'hashbank',
        component: () => import('../pages/hashbank.vue')
      }
    ]
  }
]
const router = new VueRouter({
  routes,
  mode: 'hash',

})

export default router
