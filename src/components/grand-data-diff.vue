<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-04-26 10:41:14
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-04-26 11:14:18
 * @Description  : data-diff的子组件；vue-key-diff的孙组件
-->
<template>
  <div>
   
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

    },
    mounted() {
      console.log('孙组件的attrs')
      console.log(this.$attrs)
      this.$attrs.name="zhushuyun"
    }
  })
</script>    
<style>

</style>
