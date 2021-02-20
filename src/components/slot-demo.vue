<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-02-19 15:54:24
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-02-20 17:29:48
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
      <!-- 渲染后备内容 -->
      <slot-demo-test></slot-demo-test>
      <!-- 具名插槽和作用域插槽 slot和slot-scope -->
      <!-- 具名插槽 -->
      <slot-demo-test>
        <p>取代默认的插槽</p>
        <!-- 具名插槽 v-slot 只能添加到template上-->
        <template v-slot:music>
          具名插槽 music的内容：always with me
        </template>
        <!-- 这个会上移作为v-slot:default的插槽内容 -->
        <p>这个本应该在music之前渲染的，这里可以渲染吗？</p>
      </slot-demo-test>
      <!-- 作用域插槽 -->
      
      <!-- 插槽怎么用 -->
      
      <!-- 插槽的样式 -->
    </div>
  </div>
</template>
<script>
  import SlotDemoTest from './slot-demo-test.vue'
  export default({
    name: 'SlotDemo',
    components: {SlotDemoTest},
    data(){
      return {
        showSlot: false
      }
    },
    created() {
      // reduce的用法
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
    methods: {
    }
  })
</script>

