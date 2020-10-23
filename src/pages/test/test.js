import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Test from './test.vue'
import '../../assets/css/reset.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(Test)
}).$mount('#test')