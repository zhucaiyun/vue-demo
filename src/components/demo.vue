<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-02-04 14:30:12
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-02-19 16:06:36
 * @Description  : any demo for test some attribute or function 
-->
<template>
<div>
  <button @click="showDemo = !showDemo">shift-key事件</button>
  <div class="demo" v-if="showDemo"  @keydown.shift="keyShift" @keyup.shift="keyUnshift" tabindex="0">
    可以在不同区域监听shift是否按下去了吗
    这里按下shift无反应
    <div  :class="className">
      只在这个区域按下shift才可以调用方法
    </div>
  </div>
</div>
</template>
<script>
// 这里的组件名起的不好哦，应该是一个多单词的名字
export default({
  name:'Demo',
  data() {
    return {
      className: 'redFont',
      showDemo: false
    }
  },
  created() {
    window.addEventListener('keydown',(e)=>{
      if(e.key==="Shift") {
        console.log('hhhh')
      }
    })
  },
  methods: {
    keyShift() {
      console.log('keyShift')
      this.className='redFont'
    },
    keyUnshift() {
      this.className = ''
    }
  }
})
</script>
<style>
  .className {
    color: red;
  }
</style>