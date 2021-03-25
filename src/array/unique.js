//数组去重
function unique(arr) {
  //定义一个新数组
  let result = []
  //遍历原数组
  arr.forEach(item => {
    //判断数组中是否有该元素
    if (result.indexOf(item) === -1) {
      result.push(item)
    }
  });
  //返回新数组
  return result
}
function unique2(arr) {
  //定义一个新数组
  let result = []
  //定义一个对象
  let obj = {}
  //遍历原数组
  arr.forEach(item=>{
    //判断对象中是否有该元素
    if (!obj[item]) {
      //给对象添加属性
      obj[item] = true
      result.push(item)
    }
  })
  //返回新数组
  return result
}
function unique3(arr) {
  //运用数组去重方法 Set
  let set = new Set(arr)
  //返回一个新数组
  return [...set]
}