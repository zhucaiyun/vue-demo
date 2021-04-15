<template>
  <div>
    <h3>css选择器</h3>
    <div class="parents">
      <p class="first-child">first child</p>
      <span>after first span </span>
      <p>seconde child</p>
      <p>third child</p>
      <a href="http://www.baidu.com" title="百度">众里寻她千百度</a>
      <a href="http://www.hello.com">hello</a>
    </div>
  </div>
</template>
<style>
  /* 相邻的兄弟 */
  p+p { 
    color: blue
  }
  /* 属性的 */
  a[title] {
    color: green;
  }
  .parents {
    position: relative;
    background: lightgrey;
    font-family: sans-serif;
  }
  .parents::after {
    content: '->'
  }
  .first-child::before {
    content: '';
    position: absolute;
    border-color: #093;
    border-style: solid;
    /* 上右下左 */
    border-width: 0 0.3em 0.25em 0; 
    height: 1em;
    top: 1.3em;
    left: 0.6em;
    margin-top: -1em;
    transform: rotate(45deg);
    width: 0.5em;
  } 
  .first-child::first-letter {
    font-size: 30px;
  }
  .first-child::first-line {
    /* 将字母设置成大写的，css现在也很神奇哦！很多很好用的小属性 capitalize：首字母大写*/
    text-transform: uppercase; 
  }

</style>
