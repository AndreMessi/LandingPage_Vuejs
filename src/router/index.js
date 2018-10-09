import Vue from 'vue'
import Router from 'vue-router'
import Hero from '@/components/Hero'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hero',
      component: Hero
    }
  ],
  mode: 'history'
})
