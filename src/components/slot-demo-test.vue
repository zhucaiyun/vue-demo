<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-02-20 15:23:45
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-04-22 14:20:01
 * @Description  : 描述信息
-->
<template>
  <div class="main">
    我是子组件的内容，下面是slot的内容：
    <!-- 设置一个默认值 后备内容 -->
    <slot>
      默认的slot内容:
      查看默认的slot的this是谁的呢？
      <button @click="checkDefaultThis">查看this</button>
    </slot>
    <!-- 具名插槽 -->
    <slot name="music"> </slot>
    <!-- 作用域插槽 -->
    <slot :scopeName="scopeName"></slot>
    <!-- 插槽 prop -->
    <slot></slot>
  </div>
</template>
<script>
  export default({
    name:'slot-demo-test',
    data() {
      return {
        scopeName: '我是子组件的作用域,gaga'
      }
    },
    mounted() {
      console.log(this.$slots.music)
    },
    methods: {
      checkDefaultThis() {
        console.log('默认的slot内容的this: ')
        console.log(this)//指向子组件的this
        console.log(this.$slots) // empty object
      }
    }
  })
</script>
<style>
.main {
  color: #f7ccdf;
}

</style>