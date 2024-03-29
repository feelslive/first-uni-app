import Vue from 'vue'
import App from './App'
import http from './http/http.js'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.http = http;
const app = new Vue({
    ...App
})
app.$mount()
