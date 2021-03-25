//深拷贝
function deepClone(target) {
  //JSON 不能克隆函数 和循环引用
  let result = JSON.stringify(target)
  //返回
  return JSON.parse(result)
}
function deepClone1(target) {
  //判断数组还是对象
  if (target !== null&& typeof target === 'object') {
    //创建容器
    let result = target instanceof Array ? [] : {}
    //遍历所有属性
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        //递归调用给新容器添加属性
        result[key] = deepClone1(target[key])
      }
    }
    //返回
    return result
  }
  //基本数据类型和函数直接返回
  return target
}
//解决循环引用的问题
function deepClone2(target,map=new Map()) {
  //判断数组还是对象
  if (target !== null&& typeof target === 'object') {
    //判断是否已经克隆过
    if(map.get(target)){
      return map.get(target)
    }
    //创建容器
    let result = target instanceof Array ? [] : {}
    //保存到容器中
    map.set(target,result)
    //遍历所有属性
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        //递归调用给新容器添加属性
        result[key] = deepClone2(target[key],map)
      }
    }
    //返回
    return result
  }
  //基本数据类型和函数直接返回
  return target
}
//优化
function deepClone3(target,map=new Map()) {
  //判断数组还是对象
  if (target !== null&& typeof target === 'object') {
    //判断是否已经克隆过
    let result = map.get(target)
    if(result){
      return result
    }
    //创建容器
     result = target instanceof Array ? [] : {}
    //保存到容器中
    map.set(target,result)
    //如果是数组
    if (Array.isArray(target)) {
      target.forEach((item) => {
        result[item] = deepClone3(target[item],map)
      })
    }else{
      Object.keys(target).forEach((item) => {
        result[item] = deepClone3(target[item],map)
      })
    }
    //返回
    return result
  }
  //基本数据类型和函数直接返回
  return target
}
