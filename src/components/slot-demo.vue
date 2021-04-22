<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-02-19 15:54:24
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-04-22 14:26:41
 * @Description  : 插槽练习
-->
<template>
  <div class="slot-demo">
    <button @click="showSlot=!showSlot">插槽</button>
    <div v-if="showSlot" class="slot-content">
      <p>父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。</p>
      <!-- example one -->
      <slot-demo-test>
        这是父组件的内容：{{showSlot}}
      </slot-demo-test>
      <!-- 渲染后备内容-设置默认值 -->
      <slot-demo-test></slot-demo-test>
      <!-- 具名插槽和作用域插槽 slot和slot-scope -->
      <!-- 具名插槽 原来是 slot 但是弃用-->
      <slot-demo-test class="music-scope">
        <p>取代默认的插槽</p>
        <!-- 具名插槽 v-slot 只能添加到template上-->
        <!-- 具名插槽只能用在template上 除非：只有一个默认的插槽； 动态插槽名 -->
        <template #[music]>
          具名插槽 music的内容：看一下插槽的this是谁的实例呢
          <button @click="checkThis">点我查看</button>
        </template>
        <!-- 这个会上移作为v-slot:default的插槽内容 -->
        <!-- 为什么会上移呢？ -->
        <!-- 插槽肯定是在一个组件中使用的，在父组件中引用的时候给插槽填充内容，所以插槽中的this是指向父组件还是子组件 -->
        <p>这个本应该在music之前渲染的，这里可以渲染吗？</p>
      </slot-demo-test>·
      <!-- 作用域插槽，就是在父组件中调用子组件的data，插槽prop ：一个元素只能有一个v-slot命令-->
      <slot-demo-test class="scopes">
        <!--  v-slot:default="scopeValue" =》换成解构写法=》缩写 -->
        <template #default="{scopeName}">
          <p>zheshishenme</p>
          {{scopeName}}
          <p>我在这里哦</p>
        </template>
        <!-- 一个元素只能有一个element -->
      </slot-demo-test>

    </div>
    <div>
      <!-- todo list -- 插槽prop -->
      <!-- name 和 scope是可以同时使用的 -->
      <slot-demo-todo :filterTodos='filterTodos' v-if="showSlot">
        <template #todo="{todo={text: 'harry poter'}}">
          {{todo.text}}
        </template>
        <template #time="{todo}">
          {{todo.time}}
        </template>
      </slot-demo-todo>
    </div>

    <!-- 实例property $slots,$scopedSlots -->
    <div>
      
    </div>
  </div>
</template>
<script>
  import SlotDemoTest from './slot-demo-test.vue'
  import SlotDemoTodo from './slot-demo-todo'
  export default({
    name: 'SlotDemo',
    components: {SlotDemoTest,SlotDemoTodo},
    data(){
      return {
        showSlot: false,
        music: 'music', //动态插槽名
        filterTodos: [{id: 1,text:'steve jobs', time:'2016'},{id: 2,text:'poor dad,rich dad', time:'2017'},{id: 3,text:'平凡的世界', time:'2018'}]
      }
    },
    created() {
      // reduce的用法 客串测试一下reduce
      // https://stackoverflow.com/questions/44875525/array-push-is-not-a-function-when-working-with-reduce
      var a = [{a:1}];
      var c = a.reduce((sum,item)=>{
        // console.log(sum)
        // console.log(typeof sum)
        sum.push({...item,name:'cc'})
        return sum //这里return 会作为下一次循环的sum值
      },[])
      console.log(c)
    },
    mounted() {
      console.log('--------------$slots-----------')
      console.log(this.$slots.music)
    },
    methods: {
      checkThis() {
        console.log('父组件调用插槽，插槽中的this是谁呢：')
        console.log(this) //this是父组件即该组件的this
      }
    }
  })
</script>
<style>
  .scopes {
    width: 50%;
    border: 1px solid red;
  }
  .music-scope {
    width: 60%;
    border: 1px solid blue;
  }
</style>

