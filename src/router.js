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
      path: '/test',
      name: 'test',
      component: () => import( /* webpackChunkName: "about" */ './test/test.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import( /* webpackChunkName: "about" */ './views/index/index.vue')
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
       component: () => import( /* webpackChunkName: "about" */ './views/monitoringAndEarlyWarning/monitorAndEarlyWarnCntainer.vue'),
       children: [{
         path: 'a',
         name:'a',
         component: () => import( /* webpackChunkName: "about" */ './views/monitoringAndEarlyWarning/roadNetworkRunMonitor/RoadNetworkRunMonitorIndex.vue')
         
       },{
           path: 'KeyTransportVehiclesIndex',//重点运输车辆
           name:'KeyTransportVehiclesIndex',
           component: () => import( /* webpackChunkName: "about" */ './views/monitoringAndEarlyWarning/keyTransportVehicles/KeyTransportVehiclesIndex.vue')
       }, {
         path: 'slowTrafficMonitorIndex', //慢性交通
         name: 'slowTrafficMonitorIndex',
         component: () => import( /* webpackChunkName: "about" */ './views/monitoringAndEarlyWarning/slowTrafficMonitor/slowTrafficMonitorIndex.vue')
       }
      ],
       
     }, {
       //  专题分析监测
       path: '/specialSubjectAnalysis',
       name: 'specialSubjectAnalysis',
       component: () => import( /* webpackChunkName: "about" */ './views/specialSubjectAnalysis/specialSubjectAnalysisContainer.vue'),
       children: [{  //重大活动
         path: 'majorActivitiesIndex',
         name: 'majorActivitiesIndex',
         component: () => import( /* webpackChunkName: "about" */ './views/specialSubjectAnalysis/majorActivities/majorActivitiesIndex.vue')

       }, {
         path: 'groundBusOperationIndex', //地面公交运行专题分析
         name: 'groundBusOperationIndex',
         component: () => import( /* webpackChunkName: "about" */ './views/specialSubjectAnalysis/groundBusOperation/groundBusOperationIndex.vue')
       }, {
         path: 'shareBikeServiceIndex', //共享单车服务分析
         name: 'shareBikeServiceIndex',
         component: () => import( /* webpackChunkName: "about" */ './views/specialSubjectAnalysis/shareBikeService/shareBikeServiceIndex.vue')
       }],

     }

  ]
})
