import Vue from 'vue'
import App from './App'
import store from './store'
import ElementUI from "element-ui"

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
