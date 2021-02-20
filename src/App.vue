<template>
  <div id="app">
    <!-- css选择器 -->
    <HelloWorld msg="Welcome to Your Vue.js App" @click.native="noNative"/>
    <!-- 事件捕获和冒泡 -->
    <stop-prevent> </stop-prevent> 
    <!-- shift 是否按下事件监听 -->
    <demo-shift></demo-shift>
    <!-- 插槽 -->
    <slot-demo></slot-demo>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import StopPrevent from'./components/stopPrevent.vue'
import DemoShift from'./components/demo.vue'
import SlotDemo from './components/slot-demo.vue'

export default {
  name: 'App',
  data() {
    return {
    }
  }, 
  components: {
    HelloWorld,
    StopPrevent,
    DemoShift,
    SlotDemo
  },
  methods: {
    // 事件冒泡和捕获的例子
    noNative() {
      console.log('在组件上但是没有native不会触发，加上native后会触发')
    }
  }
}
</script>

<style>
button {
  width: 90px;
  height: 32px;
  margin: 8px;
  color: #fff;
  background: #409eff;
  border: 0;
  border-radius: 4px;
  cursor:pointer;
}
</style>
