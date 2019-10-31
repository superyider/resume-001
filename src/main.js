import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Slick from 'vue-slick'
import scrollSpy, { Easing } from "vue2-scrollspy";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import globaljs from './assets/js/global.js'
import VueSilentbox from 'vue-silentbox'

Vue.use(globaljs, BootstrapVue, Slick, Vuex)
Vue.use(VueSilentbox)
Vue.use(scrollSpy, {
  easing: Easing.Cubic.Out
})
Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


