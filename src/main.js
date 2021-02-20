import Vue from 'vue'
import App from './App.vue'

// Vue.config vue全局配置
Vue.config.productionTip = true
Vue.config.silent = true
Vue.config.optionMergeStrategies._my_option = 2

new Vue({
  render: h => h(App),
}).$mount('#app')
