<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-04-14 13:36:36
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-04-22 17:55:03
 * @Description  : vue 特殊的attribute&客串一下ref-attrs
-->
<template>
  <div>
    <p>dfasdf</p>
    <p v-for="(item,index) in setData" :key="index">
      <span v-for="(i,n) in item.datas" :key="'change'+n">{{i.name}}:{{i.age}}</span>
    </p>
  </div>
</template>
<script>
  export default({
    name: 'data-diff',

    data() {
      return {
        
      }
    },
    props: {
      setData: {
        type: Array,
        default: ()=>[]
      }
    },
    methods: {

    }
  })
</script>    
<style>

</style>