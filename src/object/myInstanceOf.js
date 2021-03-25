//自定义instanceOf
//语法: myInstanceOf(obj, Type)
// 功能: 判断obj是否是Type类型的实例
// 实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false
function myInstanceOf(obj,Type) {
  //获取对象的隐式原型对象
  let protoObj = obj.__proto__
  //当隐式原型存在时 Object.prototype.__proto__ = null
  while (protoObj) {
    //当隐式原型等于显示原型时
    if (protoObj === Type.prototype) {
      return true
    }
    //确认整个原型链
    protoObj = protoObj.__proto__
  }
  return false
}