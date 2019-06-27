import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/index',
      name: 'index',
      component: () => import( /* webpackChunkName: "about" */ './views/index/index.vue')
    },    
    {
      path: '/jcyj',
      name: 'jcyj',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/jcyj.vue')
    }, 
    {
      path: '/ztjc',
      name: 'ztjc',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/ztjc.vue')
    }, 
    {
      path: '/yjxt',
      name: 'yjxt',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/yjxt.vue')
    }, 
    {
      path: '/xxfb',
      name: 'xxfb',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/xxfb.vue')
    }, 
    {
      path: '/fzjc',
      name: 'fzjc',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/fzjc.vue')
    }, 
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
     {
       path: '/dmjtyxjc',
       name: 'dmjtyxjc',
       children:[{
           path: '',
           component: () => import( /* webpackChunkName: "about" */ './views/monitoringAndEarlyWarning/DmjtyxjcIndex.vue')
       }],
       component: () => import( /* webpackChunkName: "about" */ './views/monitoringAndEarlyWarning/dmjtyxjc.vue')
    },
     { 
      //  道路运行监测
       path: '/roadnetworkrunmonitor', 
       name: 'roadnetworkrunmonitor',
       children: [{
         path: '',
         component: () => import( /* webpackChunkName: "about" */ './views/monitoringAndEarlyWarning/roadNetworkRunMonitor/RoadNetworkRunMonitorIndex.vue')
       }],
       component: () => import( /* webpackChunkName: "about" */ './views/monitoringAndEarlyWarning/roadNetworkRunMonitor/RoadNetworkRunMonitorContainer.vue')
     }

  ]
})
