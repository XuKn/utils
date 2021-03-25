//浅拷贝
//1.运用数组es6方法
function clone(target) {
  //当不是null 时 判断数组还是对象
  if (target !== null && typeof target === 'object') {
    //当是数组时
    if (Array.isArray(target)) {
      return [...target]
    }else{
      return {...target}
    }
  }
  //基本数据类型或函数直接返回 
  return target
}
//es5方法
function clone1(target) {
  //当不是null 时 判断数组还是对象
  if (target !== null && typeof target === 'object') {
    //创建一个容器
    let result = Array.isArray(target) ? [] : {}
    //遍历得到所有属性
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = target[key]
      }
    }
    return result
  }
  return target
}