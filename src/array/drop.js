//得到数组部分元素
/**
 * 
 * @param {Array} arr 
 * @param {size} count 
 */
//排除左边
function drop(arr,count=1) {
  //判断
  if (arr.length === 0 || count>arr.length) {
    return []
  }
  //返回新数组
   return arr.filter((item,index) => index>=count)
}
//排除右边
function dropRight(arr,count=1) {
  //判断
  if (arr.length === 0 || count>arr.length) {
    return []
  }
  //返回新数组
  return arr.filter((item,index) => {
    return index <= arr.length -1 - count 
  })
}