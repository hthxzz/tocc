import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import index from './views/index.vue'

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
      component: index
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
      path: '/jmcxjc',
      name: 'jmcxjc',
      component: () => import( /* webpackChunkName: "about" */ './views/jcyj/jmcxjc.vue')
    },
    {
      path: '/lwyxjc',
      name: 'lwyxjc',
      component: () => import( /* webpackChunkName: "about" */ './views/jcyj/lwyxjc.vue')
    },
    {
      path: '/zdyscl',
      name: 'zdyscl',
      component: () => import( /* webpackChunkName: "about" */ './views/jcyj/zdyscl.vue')
    },
     {
       path: '/dmjtyxjc',
       name: 'dmjtyxjc',
       children:[{
           path: '',
           component: () => import( /* webpackChunkName: "about" */ './views/jcyj/DmjtyxjcIndex.vue')
       }],
       component: () => import( /* webpackChunkName: "about" */ './views/jcyj/dmjtyxjc.vue')
    },
     { 
      //  道路运行监测
       path: '/roadnetworkrunmonitor', 
       name: 'roadnetworkrunmonitor',
       children: [{
         path: '',
         component: () => import( /* webpackChunkName: "about" */ './views/jcyj/roadNetworkRunMonitor/RoadNetworkRunMonitorIndex.vue')
       }],
       component: () => import( /* webpackChunkName: "about" */ './views/jcyj/roadNetworkRunMonitor/RoadNetworkRunMonitorContainer.vue')
     }

  ]
})
