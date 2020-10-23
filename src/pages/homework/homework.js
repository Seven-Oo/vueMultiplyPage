import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Homework from './homework.vue'
import '../../assets/css/reset.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(Homework)
}).$mount('#homework')