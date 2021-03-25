/**
 * 
 * @param {Array} arr 
 * @param {Size} begin 
 * @param {Size} end 
 */
//数组切片
function slice(arr,begin,end=arr.length) {
  //当arr为一个空数组时
  if (arr.length === 0) {
    return []
  }
  //begin初始值
  begin = begin || 0
  if (begin >= arr.length) {
    return []
  }
  //end初始值
  if (end > arr.length) {
    end = arr.length
  }
  if (end <= begin) {
    return []
  }
  //定义一个新数组
  let result = []
  //遍历原数组
  arr.forEach((item,index) => {
    //判断下标是否在这区间
    if (index >= begin && index<end) {
      result.push(item)
    }
  })
  //返回新数组
  return result
}