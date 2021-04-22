<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-04-16 16:32:09
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-04-16 17:15:20
 * @Description  : 描述信息
-->
<template>
  <div>
    <ul>
      <li
        v-for="item in filterTodos"
        :key="item.id"
      >
        <slot name="todo" :todo="item"></slot>
        <slot name="time" :todo="item"></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default({
  name: 'todo-list',
  props: {
    filterTodos: {
      type: Array,
      default:()=>[]
    }
  },
  data() {
    return {
      
    }
  },
  method: {

  }
})
</script>