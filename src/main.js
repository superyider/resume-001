import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Slick from 'vue-slick'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import globaljs from './assets/js/global.js'//全域ＪＳ

Vue.use( globaljs , BootstrapVue , Slick )
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


