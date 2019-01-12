import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/scss/font-awesome.scss'
import VueScroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'
import './assets/css/base.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})