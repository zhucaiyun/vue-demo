<template>
  <div id="app">
    <!-- css选择器 -->
    <css-dom msg="Welcome to Your Vue.js App" @click.native="noNative"/>
    <!-- 事件捕获和冒泡 -->
    <stop-prevent> </stop-prevent> 
    <!-- shift 是否按下事件监听 -->
    <shift-key/>
    <!-- 插槽 -->
    <slot-demo></slot-demo>

    <!-- 非同源图片下载 -->
    <img-cors></img-cors>
    <!-- diff-key -->
    <key-diff></key-diff>
    <!-- ref -->
    <ref-attr></ref-attr>
    <!-- property -->
    <property testProp="prop"></property>
  </div>
</template>

<script>
import CssDom from './components/css-dom.vue'
import StopPrevent from'./components/stop-prevent.vue'
import SlotDemo from './components/slot-demo.vue'
import ImgCors from './components/img-cors.vue'
import ShiftKey from './components/shift-key.vue'
import KeyDiff from './components/vue-key-diff.vue'
import RefAttr from './components/ref-attr.vue'
import Property from './components/property/index.vue'

export default {
  name: 'App',
  data() {
    return {
    }
  }, 
  components: {
    CssDom,
    StopPrevent,
    SlotDemo,
    ImgCors,
    ShiftKey,
    KeyDiff,
    RefAttr,
    Property,
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
