/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-07-13 11:04:27
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-07-15 11:49:31
 * @Description  : vue 原理
 */
/*
* defineProperty 
* 响应式
* https://segmentfault.com/a/1190000039071402?utm_source=sf-similar-article
* 修改对象或者新加属性
*/
const person = {}
let newVal = 'female'
// Object.defineProperty来侦测变化会有很多缺陷 啥缺陷 TODO
Object.defineProperty(person, 'gender', {
  configurable: true,
  get() { return 'hhhh' },
  set(setVal) { newVal = setVal}
})
person.gender = 'male' // 改变属性值会触发set方法
/* console.log(newVal) // male
*  console.log(person.gender) // 'hhhh' 读取属性只调用了get方法
*/

// vue.use()和vue.component()的区别 ？？？ TODO

// 什么是依赖 Watcher


// 依赖的解藕 怎么就耦合了，为什么要解藕

// 类的实例
// 拦截
var obj = new Proxy({}, {
  // get 
  get: function()
  //  set
})
