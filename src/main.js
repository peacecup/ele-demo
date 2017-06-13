import Vue from 'vue'

import store from './store/index'
import router from './router/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'


Vue.use(ElementUI);

//Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render : (h) => h(App)
}).$mount('#app');
