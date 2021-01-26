import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:'/task',
    name:'ActivityTask',
    component:()=>import(/* webpackChunkName: "task" */ '../views/ActivityTask/ActivityTask.vue')
  },
  {
    path:'/activityRules',
    name:'ActivityRules',
    component:()=>import(/* webpackChunkName: "task" */ '../views/ActivityRules.vue')
  },
  {
    path:'/bird',
    name:'FlyBird',
    component:()=>import(/* webpackChunkName: "bird" */ '../views/flyBird/FlyBird.vue')
  },
  {
    path:'/banner',
    name:'Banner',
    component:()=>import(/* webpackChunkName: "banner" */ '../views/Banner.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
