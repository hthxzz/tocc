import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
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
      component: () => import(  './views/index/index.vue')
    },
    {
      path: '/dmjtyxjc',
      name: 'dmjtyxjc',
      children: [{
        path: '',
        component: () => import(  './views/monitoringAndEarlyWarning/DmjtyxjcIndex.vue')
      }],
      component: () => import('./views/monitoringAndEarlyWarning/dmjtyxjc.vue')
    },
    {
      //  道路运行监测
      path: '/roadnetworkrunmonitor',
      name: 'roadnetworkrunmonitor',
      component: () => import('./views/monitoringAndEarlyWarning/monitorAndEarlyWarnCntainer.vue'),
      children: [{
        path: 'a',
        name: 'a',
        component: () => import('./views/monitoringAndEarlyWarning/roadNetworkRunMonitor/RoadNetworkRunMonitorIndex.vue')

      }, {
        path: 'KeyTransportVehiclesIndex', //重点运输车辆
        name: 'KeyTransportVehiclesIndex',
        component: () => import('./views/monitoringAndEarlyWarning/keyTransportVehicles/KeyTransportVehiclesIndex.vue')
      }, {
        path: 'slowTrafficMonitorIndex', //慢性交通
        name: 'slowTrafficMonitorIndex',
        component: () => import('./views/monitoringAndEarlyWarning/slowTrafficMonitor/slowTrafficMonitorIndex.vue')
      }, {
        path: 'airTransportOperationIndex', //慢性交通
        name: 'airTransportOperationIndex',
        component: () => import('./views/monitoringAndEarlyWarning/airTransportOperation/airTransportOperationIndex.vue')
      }, {
        path: 'industryStaticInforQueryIndex', //慢性交通
        name: 'industryStaticInforQueryIndex',
        component: () => import('./views/monitoringAndEarlyWarning/industryStaticInforQuery/industryStaticInforQueryIndex.vue')
      }],

    }, {
      //  专题分析监测
      path: '/specialSubjectAnalysis',
      name: 'specialSubjectAnalysis',
      component: () => import('./views/specialSubjectAnalysis/specialSubjectAnalysisContainer.vue'),
      children: [{ //重大活动
        path: 'majorActivitiesIndex',
        name: 'majorActivitiesIndex',
        component: () => import('./views/specialSubjectAnalysis/majorActivities/majorActivitiesIndex.vue')

      }, {
        path: 'groundBusOperationIndex', //地面公交运行专题分析
        name: 'groundBusOperationIndex',
        component: () => import('./views/specialSubjectAnalysis/groundBusOperation/groundBusOperationIndex.vue')
      }, {
        path: 'shareBikeServiceIndex', //共享单车服务分析
        name: 'shareBikeServiceIndex',
        component: () => import('./views/specialSubjectAnalysis/shareBikeService/shareBikeServiceIndex.vue')
      }, {
        path: 'badWeather', //恶劣天气交通运行专题监测
        name: 'badWeather',
        component: () => import('./views/specialSubjectAnalysis/badWeather/badWeather.vue')
      }],

    }, {
      //  应急协同
      path: '/emergencyCoordination',
      name: 'emergencyCoordination',
      component: () => import('./views/emergencyCoordination/emergencyCoordinationContainer.vue'),
      children: [{ //重大活动
        path: 'shuangliuAirportIndex',
        name: 'shuangliuAirportIndex',
        component: () => import('./views/emergencyCoordination/shuangliuAirport/shuangliuAirportIndex.vue')

      }, {
        path: 'groundBusOperationIndex', //地面公交运行专题分析
        name: 'groundBusOperationIndex',
        component: () => import('./views/specialSubjectAnalysis/groundBusOperation/groundBusOperationIndex.vue')
      }, {
        path: 'shareBikeServiceIndex', //共享单车服务分析
        name: 'shareBikeServiceIndex',
        component: () => import('./views/specialSubjectAnalysis/shareBikeService/shareBikeServiceIndex.vue')
      }],

    }

  ]
})