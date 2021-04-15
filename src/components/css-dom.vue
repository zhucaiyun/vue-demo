<template>
  <div class="hello">
    <button @click="showCssChoose=!showCssChoose">CSS选择器</button>
    <css-demo v-if="showCssChoose"></css-demo>
  </div>
</template>

<script>
import cssDemo from './css-demo.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {
      showCssChoose: false
    }
  },
  components: {
    cssDemo
  },
  created() {
    // 时间初始化
    this.initDate()
  },
  methods: {
    initDate() {
      console.log(new Date())
      console.log(new Date(Date.parse('2020/11/23')))
      console.log(new Date('2020.10.11')) // 2020/11/14
      console.log(new Date(2020,0,32))
      Date.prototype.zcy = '1993.10.01'
      console.log(new Date().zcy)
      Date.prototype.birthday=function(age) {
        return new Date(new Date()-age*365*24*60*60*1000) // 93,12,16
      } 
      console.log(new Date().birthday(26))
      console.log(new Date(Date.parse('1966.03.12')))
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
