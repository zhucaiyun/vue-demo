<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-02-20 15:23:45
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-02-20 18:09:20
 * @Description  : 描述信息
-->
<template>
  <div class="main">
    我是子组件的内容，下面是slot的内容：
    <!-- 设置一个默认值 后备内容 -->
    <slot>默认的slot内容</slot>
    <!-- 具名插槽 -->
    <slot name="music"> </slot>
    <!-- 作用域插槽 -->
  </div>
</template>
<script>
  export default({
    name:'slot-demo-test',
    data() {
      return {
        scopeName: '我是子组件的作用域'
      }
    }
  })
</script>
<style>
.main {
  color: #f7ccdf;
}

</style>