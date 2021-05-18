import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ShoppintCart from '../views/ShoppintCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/shoppint-cart',
    name: 'ShoppintCart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ShoppintCart
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
