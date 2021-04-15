<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-04-06 11:11:49
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-04-14 11:15:46
 * @Description  : 描述信息
-->
<template>
  <div>
    <button @click="isShow=!isShow">非同源图片下载</button>
    <div class="imgs" v-if="isShow">
      <p>header头部的意义</p>
      <p></p>
    </div>
  </div>
</template>
<script>
  export default({
    name: 'img-cors',
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      
    }
  })
</script>
<style>
  .imgs {
    width: 60px;
    height: 60px;
  }
</style>