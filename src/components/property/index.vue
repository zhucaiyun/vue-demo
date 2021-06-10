<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-04-19 15:07:14
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-06-10 18:16:17
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
      <div>注：$slots,$scopedSlots在slot-demo中实现 没找到怎么用？？？</div>
      <!-- $attrs -->
      <div>$attrs和¥listeners参考vue-key-diff,data-diff,grand-data-diff;</div>
      <div v-for="(item,index) in wrong" :key="index">
        {{item.age}}
      </div>
      <input type="text" @keyup.media-play-pause="vis">
    </div>
    <button @click="isShowGlobalAPI">全局API</button>
    <div v-if="isShowGlobalAPI">
      <h3>全局API</h3>
      <div>
        <!-- extend -->
        <div id="mount-point">
          <!-- 挂载extend -->

        </div>
        <div>
          set:
          zhu: family 有 {{zhu.num}}人
        </div>
        <div v-my-directive>
          自定义指令 
        </div>
        <div>{{filterData|my-filter}}</div>
      </div>

    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  // extend  todo tempalte编译模版的模式有些问题 [https://www.yuque.com/silence-uta7r/wti0pl/nr1xk5/edit]
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
        isShow: false,
        isShowGlobalAPI: true,
        $testIsDaili: '$property不会被vue代理',
        testObjChange: {
          firstName: 'kobe',
          lastName: 'bryant'
        },
        wrong: 3,
        // _test_:'_开头不能定义',//Keys starting with with '_' are reserved in '_test_' group.
        zhu: {
          
        },
        filterData: 'zhuShuyun'
      }
    },
    created() {
      var Profile = Vue.extend({
        template: '<p>{{firstName}} {{lastName}} is {{age}}',
        data(){
          return {
            firstName: 'Caiyun',
            lastName: 'Zhu',
            age: 28,
            
          }
        }
      })
      Vue.nextTick(function(){
        new Profile().$mount('#mount-point')
      })
      Vue.set(this.zhu,'num',9) //第一个参数不能是vue的实例或者根实例 普通的新属性vue无法探测不能尽兴响应式触发
      // Vue.delete(this.zhu,'num')  //删除某个属性或者元素 用于避开vue不能检测到property被删除的限制
      // 注册全局指令 todo 怎么使用呢
      Vue.directive('my-directive',{
        bind: function (el,binding,vnode) {
          console.log('bind')
          console.log(el)
          console.log(binding)
          console.log(vnode)
        },
        inserted: function(a,b,c,d) {
          console.log(a,b,c,d)
        },
        update: function(a,b,c,d) {
          console.log(a,b,c,d)
        },
        componentUpdated: function(a,b,c,d) {
          console.log(a,b,c,d)
        },
        unbind: function(a,b,c,d) {
          console.log(a,b,c,d)
        }
      })
      Vue.directive('my-directive')// 需要使用install
      Vue.filter('my-filter',function(value){
        if(!value) return
        value = value.toString()
        return value.charAt(0).toUpperCase()+value.slice(1)
      })
      // component
      
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
      // this.zhu.num = 5
      // this.zhu = {}
    },
    methods: {
      definedChange() {
        this.testObjChange.firstName = 'KOBE' //页面会响应
      },
      undefinedChange() {
        this.testObjChange = Object.assign({},this.testObjChange,{name:'kobe brant'}) // this is effect 有效的
        // this.testObjChange.name = 'kobe brant'
        console.log(this.testObjChange) //有name了但是页面没有响应
      },
      vis() {
        console.log('zhu')
      },
      
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
