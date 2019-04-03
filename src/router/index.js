import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import index from '@/components/banner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav,
      children:[
        {
          path:'/index',
          name:'index',
          component:index
        }
      ]
    }
  ]
})
