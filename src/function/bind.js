/**
 * 
 * @param {Function} fn 
 * @param {Object} obj 
 * @param  {*} args 
 * @returns 
 */
function bind(fn,obj,...args) {
  //返回一个新函数
  return function (...args2) {
    //通过call调用原函数, 并指定this为obj, 实参为args与args2 
    return call(fn,obj,...args,...args2)
  }
}