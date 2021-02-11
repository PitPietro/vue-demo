import Vue from 'vue';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import './assets/css/main.css';
import {store} from './store';

Vue.config.productionTip = false

new Vue({
    el: '#app',
    vuetify,
    render: h => h(App),
    router,
    store
})

// new Vue({
//   vuetify,
//   router,
//   render: h => h(App)
// }).$mount('#app')
