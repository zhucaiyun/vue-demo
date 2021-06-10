<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-04-14 13:36:36
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-04-27 15:34:32
 * @Description  : vue 特殊的attribute&客串一下ref-attrs
-->
<template>
  <div>
    <p v-for="(item,index) in setData" :key="index">
      <span v-for="(i,n) in item.datas" :key="'change'+n">{{i.name}}:{{i.age}}</span>
    </p>
    <button @click="clickme">子组件的时间</button>
    <!-- 父作用域中没有被prop接受的attribute；如果不加就不会传给grand-data-diff，但是本文件中$attrs中会识别 -->
    <grand-data-diff :grand-name="name" @sayChild="sayChild" v-bind="$attrs" v-on="$listeners"/> 
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
      clickme() {
        console.log('子组件点击事件')
      },
      sayChild() {
        console.log('I am child')
      }
    },
    mounted() {
      console.log(this)
      console.log(this.$attrs)  // 是一个对象包含所有非property，class style id的属性
      console.log(this.getData)
      console.log('------子组件的$listeners----------------------')
      console.log(this.$listeners)
    }
  })
</script>    
<style>

</style>