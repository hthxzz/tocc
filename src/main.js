import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import './untils/rem.js';
import './untils/element-variables.scss';
// import './plugins/flexible.js'
Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
