import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',

      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: 'no-sidebar' },
      component: About
    }
  ]
})
