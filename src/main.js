import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';


Vue.config.productionTip = false

Vue.use({
    install(Vue) {
        Vue.prototype.$api = axios.create({
            baseURL: 'http://localhost:8080/v1'
        })
    }
})

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
