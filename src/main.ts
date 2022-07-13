import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'chlng-ui/dist/index.min.css';
import TayehUi from 'chlng-ui/dist/index.es.min.js';
import '@/assets/styles/shared.scss';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import API from './plugins/api';

Vue.config.productionTip = false;
Vue.use(API, { baseURL: 'https://conduit.productionready.io/api' });
Vue.use(TayehUi);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
