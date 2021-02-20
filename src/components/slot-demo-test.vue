<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-02-20 15:23:45
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-02-20 16:51:40
 * @Description  : 描述信息
-->
<template>
  <div class="main">
    我是子组件的内容，下面是slot的内容：
    <!-- 设置一个默认值 后备内容 -->
    <slot>默认的slot内容</slot>
    <!-- 具名插槽 -->
    <slot name="music"> </slot>
  </div>
</template>
<style>
.main {
  color: #f7ccdf;
}

</style>