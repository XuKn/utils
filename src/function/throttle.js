/**
 * 
 * @param {Function} callback 
 * @param {Time} wait 
 * @returns 
 */
//节流
function throttle(callback,wait) {
  //定义初始值
  let start = 0
  //返回一个函数
  return function (e) {
    //获取当前时间戳
    let now = Date.now()
    // 只有当距离上次处理的时间间隔超过了wait时, 才执行处理事件的函数
    if (now - start >= wait) {
      callback.call(this,e) //执行回调,确定this指向
      //修改初始值
      start = now
    }
  }
}