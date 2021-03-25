//自定义new
// 语法: newInstance(Fn, ...args)
// 功能: 创建Fn构造函数的实例对象
function newInstance(Fn,...args) {
  //创建一个空对象
  let obj = {}
  //修改原型链
  obj.__proto__ = Fn.prototype
  //确定this指向并执行函数 运用call方法改变this并执行
  let result = Fn.call(obj,...args)
  //判断返回值并返回 
  return result instanceof Object ? result : obj
}