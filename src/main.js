import Vue from 'vue'
import App from './App.vue'

// Vue.config vue全局配置
Vue.config.productionTip = true //true在浏览器开发工具的性能/时间线面板中启用对组件初始化，编译，渲染和打补丁的性能追踪
Vue.config.silent = false// 取消日志和警告
Vue.config.optionMergeStrategies._my_option = 2
Vue.config.errorHandler=function(err,vm,info) {
  console.log(err)
  console.log(vm)
  console.log(info)
}
Vue.config.warnHandler=function(err,vm,info) {
  console.log(err,vm,info)
}
new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.config.devtools = true //设置后生成环境可以使用vue追踪

// 忽略ion标签 TODO 怎么用的呢
Vue.config.ignoredElements=[
  'ref-attr',
  /^ion/
]
// 自定义键位别名 这是什么用todo
Vue.config.keyCodes={
  "media-play-pause": 86,
  up: [38,87]
}

// performance
Vue.config.performance=true

/*************************************全局api 这些功能也可以用于局部***********************************************/
// 详见 property/index.vue
