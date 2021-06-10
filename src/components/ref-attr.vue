<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-04-14 16:39:02
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-06-10 10:22:04
 * @Description  : ref
-->
<template>
  <div class="ref-attr">
    <button @click="isShow=!isShow">ref-attr</button>
    <span>这是ref code</span>
    <ion>这是ion标签</ion>
    <div v-if="isShow">
      <p ref='normalRef'>this is a normal document element</p>
      <button @click="changeKey">操控子组件的切换事件</button>
      <!-- ref客串 -->
      <key-diff ref="keyDiff"/>
      <!-- test is绑定到一个html元素，且上面有dom attribute 和property -->
      <div :inner-html.prop="testProp">this not show</div>
      <table>
        <!-- .prop不是这样用的，而是作为元素的attribute？？？的用法，如元素本身就有 innerHtml，textContent则可以在后面加入inner-html.prop='值'和v-text一样的用途 -->
        <!-- <tr is="key-diff" :testAttr="propses" :testAttrProp.prop="propses"></tr> -->
        <tr is="key-diff"></tr>
        <tr is="key-diff" :text-content.prop="propses"></tr>
      </table>
    </div>
  </div>
</template>
<script>
  import KeyDiff from './vue-key-diff.vue'
  export default({
    name: 'ref-attr',
    components: {KeyDiff},
    data() {
      return {
        isShow: false, 
        propses: 'hello world',
        testProp:`<span style="color: red">confidence</span>`

      }
    },
    mounted() {
      console.log('---------refs-------')
      console.log(this.$refs)
      console.log(this.$refs.normalRef)
    },
    methods: {
      changeKey() {
        
        console.log(this.$refs.keyDiff)
        this.$refs.keyDiff.changeFruit()
      }
    }
  })
</script>
<style>
  .ref-attr {
    width: 50%;
    border: 1px solid grey;
  }
  ion {
    color: red;
    margin-left: 30px;
  }
</style>
