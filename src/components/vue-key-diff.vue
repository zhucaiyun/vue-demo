<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-04-14 13:36:36
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-07-05 18:09:17
 * @Description  : vue 特殊的attribute&客串一下ref-attrs
-->
<template>
  <div>
    <button @click="isShow=!isShow">key-diff</button>
    <div v-if="isShow">
      <!-- 数据改动触发过渡效果 -->
      <button @click="changeFruit">点我切换</button>
      <transition>
        <span>{{transData}}</span>
      </transition>
      <transition name="fade">
        <span :key="index">{{transData}}</span>
      </transition>
    </div>
    <div>
      <button @click="changeObj">点我改对象</button>
      <!-- v-bind="$attrs" -->
      <data-diff :setData="dataObj" :getData="dataObj" name="zhucaiyun" id="dataDiff" @sayHi="sayHi" @sayName="sayName"></data-diff>
    </div>
  </div>
</template>
<script>
  import dataDiff from './data-diff.vue'
  export default({
    name: 'vue-key-diff',
    inheritAttrs: false,
    components: {
      dataDiff
    },
    data() {
      return {
        isShow: false,
        transData: '苹果',
        index:0,
        dataObj: [],
        hhh: [1,3,4]
      }
    },
    props: {
      // testAttrProp: {
      //   type: String,
      //   default: ''
      // },
      // testAttr: {
      //   type: String,
      //   default: ''
      // }
    },
    mounted() {
      this.dataObj =[
          {
            proName: 'friends',
            datas: [
              {name:'monic',age: 2},
              {name:'richeal',age: 26},
              {name:'ross',age: 1},
            ]
          }
        ]
      var c = this.testMap(this.hhh)
      console.error(c)

    },
    methods: {
      changeFruit() {
        // console.log(this.testAttrProp)
        console.log(this)
        this.index++
        const getRandomIndex = parseInt(Math.random()*5)
        const fruitsArr = ['apple','pear','strawberry','grape','peach']
        this.transData =  fruitsArr[getRandomIndex]
      },
      changeObj() {
        this.dataObj= [
          {
            proName: 'friends',
            datas: [
              {name:'monic',age: 2},
              {name:'richeal',age: 3},
              {name:'ross',age: 1},
            ]
          }
        ]
      },
      sayHi() {
        console.log('sayHi hi')
      },
      sayName() {
        console.log('hi,Monic')
      },
      testMap(data) {
        return data.map(item=>{
          return {
            a: item
          }
        })
      }
    }
  })
</script>    
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>