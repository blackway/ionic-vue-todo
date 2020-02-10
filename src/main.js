import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css'


import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
Vue.component('header-component', HeaderComponent);
Vue.component('footer-component', FooterComponent);

Vue.use(Ionic);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
