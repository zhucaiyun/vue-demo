<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-04-26 10:41:14
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-04-27 16:13:51
 * @Description  : data-diff的子组件；vue-key-diff的孙组件
-->
<template>
  <div>
   <button @click="grandClick">孙组件的点击</button>
   <button @click="callSayHi">call祖父的</button>
   <button @click="callSayChild">call父亲的</button>
  </div>
</template>
<script>
  export default({
    name: 'grand-data-diff',

    data() {
      return {
        
      }
    },
    props: {
    
    },
    methods: {
      grandClick() {
        console.log('孙组件的点击时间')
      },
      callSayHi() {
        this.$emit('sayHi')
      },
      callSayChild() {
        this.$listeners.sayChild()
      }
    },
    mounted() {
      console.log('孙组件的attrs')
      console.log(this.$attrs)
      this.$attrs.name="zhushuyun" //不会影响父级的
      console.log('---------------------$listeners------------------')
      console.log(this.$listeners)
    }
  })
</script>    
<style>

</style>
