<template>
<!-- 捕获异常是哪里遇到的问题呢 -->
<!-- 在拖拽的时候，获取到的当前元素不准有时候就是别的元素 应该是冒泡和捕获造成的 在系统自动匹配的课次内容 是因为分批次造成的问题还是其他的-->
  <div class="stop-prevent">
    <button @click="showEvent=!showEvent">事件冒泡和捕获</button>
    <draggable v-if="showEvent">
      <h1>事件</h1>
      <div class="content" @click="clickParent">
        clickParent
        <div class="content__click" @click="clickChild">点击
          <div @click="clickCchild" class="cur">
            <p class="p" data="23">最里层</p>
          </div>
        </div>
      </div>
    </draggable>
  </div>
</template>
<script>
  import draggable from 'vuedraggable'
  export default {
    name : 'stopPrevent',
    data() {
      return {
        list: [],
        showEvent: false
      }
    },
    components: {
      draggable
    },
    methods: {
      clickParent(e) {
        console.log(1)
        console.log(e)
        alert('parent')
      },
      clickChild(e) {
        console.log('2')
        console.log(e)
        // 当没有添加stop时，点击父元素只调用父的，点击子元素会调用子元素和父元素事件 先子后父;加上stop就不会调用父了
        alert('child')
      },
      clickCchild(e) {
        console.log(this) // this.$el => div.stop-prevent
        // e.stopPropagation();
        alert('cchild')
        console.log(3)
        console.log(e)// e.target p  currentTarget:null

      }
    }
  }
</script>