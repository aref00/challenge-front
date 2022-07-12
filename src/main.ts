import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'tayeh-ui/dist/index.min.css';
import TayehUi from 'tayeh-ui/dist/index.es.min.js';
import '@/assets/styles/shared.scss';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(TayehUi);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
