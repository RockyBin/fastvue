import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/dashboard/Dashboard'

const Home = () => import('@/views/home/Home');
const Category = () => import('@/views/category/Category');
const Eat = () => import('@/views/eat/Eat');
const Cart = () => import('@/views/cart/Cart');
const Mine = () => import('@/views/mine/Mine');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      meta: {
          keepAlive: true
      },
    }, 
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [{
          path: '/dashboard',
          redirect: '/dashboard/home',
          meta: {
              keepAlive: true
          },
      }, {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
              keepAlive: true
          }
      }, {
        path: 'category',
        name: 'category',
        component: Category,
        meta: {
            keepAlive: true
        }
      }, {
        path: 'eat',
        name: 'eat',
        component: Eat,
        meta: {
            keepAlive: true
        }
      }, {
        path: 'cart',
        name: 'cart',
        component: Cart,
        meta: {
            keepAlive: true
        }
      }, {
        path: 'mine',
        name: 'mine',
        component: Mine,
        meta: {
            keepAlive: true
        }
      }]
    }
  ]
})
