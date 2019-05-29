import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

import Home from '@/pages/PageHome'
import Bikes from '@/pages/PageBikes'
import User from '@/pages/PageUser'
import Bookings from '@/pages/PageBookings'
import Projects from '@/pages/PageProjects'
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
        store.dispatch('auth/logout')
        next({name: 'login', params: { alert: {message: 'You were logged out successfully', variant: 'success' } }})
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      }
    },
    {
      path: '/bikes',
      name: 'bikes',
      component: Bikes,
      meta: {
        title: 'Bikes',
        requiresAuth: true
      }
    },
    {
      path: '/user',
      name: 'users',
      component: User,
      meta: {
        title: 'Users',
        requiresAuth: true
      }
    },
    {
      path: '/bookings',
      name: 'bookings',
      component: Bookings,
      meta: {
        title: 'Bookings',
        requiresAuth: true
      }
    },
    {
      path: '/projects ',
      name: 'projects',
      component: Projects,
      meta: {
        title: 'Projects',
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
    if (store.getters['auth/isLoggedIn']) {
      next()
      return
    }
    next({name: 'login'})
  } else {
    next()
  }
})

export default router
