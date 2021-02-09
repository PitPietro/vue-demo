import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import './assets/css/main.css';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App),
  router,
})

// new Vue({
//   vuetify,
//   router,
//   render: h => h(App)
// }).$mount('#app')
