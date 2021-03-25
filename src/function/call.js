/**
 * 
 * @param {Function} fn 
 * @param {Object} obj 
 * @param  {*} args 
 * @returns 
 */
function call(fn,obj,...args) {
  //  如果obj是null/undefined, this为window
  if (obj === null || obj === undefined) {
    obj = globalThis //全局对象
  }
  //给obj添加一个临时方法
  obj.temp = fn
  //调用方法
  let result = obj.temp(...args)
  //删除临时方法
  delete obj.temp
  //返回结果
  return result
}