/**
 * 
 * @param {Function} callback 
 * @param {Time} wait 
 * @returns 
 */
//防抖
function debounce(callback,wait) {
  //定义定时器任务标识
  let timeOutId = null
  //返回一个函数
  return function (e) {
    //清除正在执行的定时器
    if (timeOutId) {
      clearTimeout(timeOutId)
    }
    //延迟调用回调
    timeOutId = setTimeout(() => {
      callback.call(this,e)
      //执行完重置标识
      timeOutId = null
    }, wait);
  }
}