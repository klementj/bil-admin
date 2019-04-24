import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Home from '@/pages/PageHome'
import User from '@/pages/PageUser'
import Login from '@/pages/PageLogin'
import NotFound from '@/pages/PageNotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      props: true
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter(to, from, next) {
        store.dispatch('logout')
        next({name: 'login', params: { alert: {message: 'You were logged out successfully', variant: 'success' } }})
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/bikes',
      name: 'bikes',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/users',
      name: 'users',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
      // redirect: { name: 'Home'}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
