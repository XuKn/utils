//数组取差异
function difference(arr1,arr2=[]) {
  if (arr1.length===0) {
    return []
  }
  if (arr2.length===0) {
    //返回新数组
    return arr1.slice()
  }
  //过滤数组1中数组2相同的属性值
  let result = arr1.filter((item) =>!arr2.includes(item))
  return result
}