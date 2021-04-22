<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-04-19 15:07:14
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-04-22 14:53:44
 * @Description  : property的例子
-->
<template>
  <div>
    <button @click="isShow=!isShow">实例property</button>
    <div v-if="isShow">
      <p>类型是对象或者函数，组件只能接受函数</p>
      <p> vue实例的数据对象，vue将会地柜将data的property转换为getter和setter</p>
      <button class="sonBtn" @click="definedChange">定义属性后更改</button>
      <button class="sonBtn" @click="undefinedChange">未定义属性更改</button>
      <div>
        <span attrsProp = "test-attr">firstName is : {{testObjChange.firstName}}</span>
        <p>all name is : {{testObjChange.name}}</p>
        <p>prop is : {{testProp}}</p>
      </div>
      <div>注：$slots,$scopedSlots在slot-demo中实现</div>
    </div>
  </div>
</template>
<script>
  export default({
    name: 'property',
    defineProperty: {
      a() {
        return 'function'
      },
      b:'object'
    },
    props: {
      testProp: { 
        type: String,
        default: 'test'
      },
      testDaily: {
        type: Object,
        default: ()=>{}
      }
    },
    data() {
      return {
        isShow: true,
        $testIsDaili: '$property不会被vue代理',
        testObjChange: {
          firstName: 'kobe',
          lastName: 'bryant'
        }
        // _test_:'_开头不能定义',//Keys starting with with '_' are reserved in '_test_' group.
      }
    },
    mounted() {
      console.log(this.isShow)
      console.log(this.$data)
      console.log(this.$testIsDaili) // undefined
      console.log(this.$data.$testIsDaili)
      console.log('-------------------------------')
      console.log(this.testProp)
      console.log(this.$props)
      console.log('-------------------------------')
      console.log(this.$el) //$el  vue实例使用的根DOM元素
      console.log('------------options---------------')
      console.log(this.$options)
      console.log(this.$options.defineProperty) //可以调用
      console.log('家庭关系 vue实例-----------------')
      console.log(this.$root)
      console.log('--------------isServer------------')
      console.log(this.$isServer) // false
      console.log('--------------$attrs-------------')
      console.log(this.$attrs)
    },
    methods: {
      definedChange() {
        this.testObjChange.firstName = 'KOBE' //页面会响应
      },
      undefinedChange() {
        this.testObjChange = Object.assign({},this.testObjChange,{name:'kobe brant'}) // this is effect 有效的
        // this.testObjChange.name = 'kobe brant'
        console.log(this.testObjChange) //有name了但是页面没有响应
      }
    }
  })
</script>
<style>
.sonBtn {
  width: 80px;
  height: 32px;
  color: #fff;
  font-size: 12px;
  background: green;
}
</style>
