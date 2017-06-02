import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index.js'
import store from './store/index.js'
import './js/rem.js'
import './css/common.css'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes,
})


new Vue({
    router,
    store
}).$mount('#app');
