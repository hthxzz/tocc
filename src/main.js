import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
// import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import ECharts from 'vue-echarts';
import './untils/rem.js';
import './untils/element-variables.scss';
import './style/common.scss';
import './style/reset.css';
import './untils/color-theme.js';
import './untils/componentRegister.js'
import store  from './store/index.js'
import "./request/axios.js";
// 全局组件注册
// import VerticesBorderStyle from "./components/common/verticesBorderStyle.vue";
// import panel from "./components/common/panel.vue";
// import PanelItem from "./components/common/PanelItem.vue";

// import './plugins/flexible.js'
Vue.config.productionTip = false
// Vue.component('VerticesBorderStyle', VerticesBorderStyle);
// Vue.component('panel', panel);
// Vue.component('PanelItem', PanelItem);
Vue.component('v-chart', ECharts);

Vue.use(ElementUI);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
