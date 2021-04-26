<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-04-14 13:36:36
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-04-26 11:14:40
 * @Description  : vue 特殊的attribute&客串一下ref-attrs
-->
<template>
  <div>
    <p v-for="(item,index) in setData" :key="index">
      <span v-for="(i,n) in item.datas" :key="'change'+n">{{i.name}}:{{i.age}}</span>
    </p>
    <grand-data-diff :grand-name="name" v-bind="$attrs"/>
  </div>
</template>
<script>
  import grandDataDiff from './grand-data-diff'
  export default({
    name: 'data-diff',
    inheritAttrs: false,
    components: {grandDataDiff},
    data() {
      return {
        name: 'strong'
      }
    },
    props: {
      setData: {
        type: Array,
        default: ()=>[]
      }
    },
    methods: {

    },
    mounted() {
      console.log(this)
      console.log(this.$attrs)  // 是一个对象包含所有非property，class style id的属性
      console.log(this.getData)
    }
  })
</script>    
<style>

</style>