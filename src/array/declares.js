/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
//数组的一些声明式方法
function map(arr,callback) {
  //定义一个新数组
  let result = []
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    //执行回调并加入到新数组中
    result.push(callback(arr[i],i))
  }
  //返回新数组
  return result
}
// function forEach(arr,callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i],i)
//   }
// }
/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @param {*} result 
 * @returns 
 */
function reduce(arr,callback,result) {
  //如果没传设置默认值
  if (!result) {
    result = 0
  }
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    //执行回调
    result = callback(result,arr[i])
  }
  //返回结果
  return result
}
/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
function filter(arr,callback) {
  //定义一个新数组
  let result = []
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    //符合条件加入数组中
    if (callback(arr[i],i)) {
      result.push(arr[i])
    }
  }
  //返回新数组
  return result
}
/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
function find(arr,callback) {
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    //符合条件返回
    if (callback(arr[i],i)) {
      return arr[i]
    }
  }
  //没找到返回undefined
  return undefined
}
/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
function findIndex(arr,callback) {
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    //符合条件返回
    if (callback(arr[i],i)) {
      return i
    }
  }
  //没找到返回undefined
  return -1
  
}
/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
function every(arr,callback) {
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    //有一个不符合条件返回false
    if (!callback(arr[i],i)) {
      return false
    } 
  }
  //全符合返回true
  return true
}
/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
function some(arr,callback) {
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    //有一个符合条件返回true
    if (callback(arr[i],i)) {
      return true
    } 
  }
  //全不符合返回false
  return false
  
}