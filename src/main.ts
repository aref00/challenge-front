import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import TayehUi from 'tayeh-ui/dist/index.es.min.js';

Vue.config.productionTip = false;

Vue.use(TayehUi);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
