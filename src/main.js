import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue';


Vue.config.productionTip = false
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
const moment = require('moment');
require('moment/locale/ru');

Vue.use(require('vue-moment'), {
  moment
});
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
