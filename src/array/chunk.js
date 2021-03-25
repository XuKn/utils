//数组分块,组成二维数组
function chunk(arr,size=1) {
  //如果数组长度为0返回空数组
  if (arr.length === 0) {
    return []
  }
  //定义一个新数组
  let result = []
  //定义一个数组容器
  let temp = []
  //遍历数组
  arr.forEach(item => {
    //产生新数组添加到result中
    if (temp.length===0) {
      result.push(temp)
    }
    //添加元素
    temp.push(item)
    //判断是否符合要求
    if (temp.length===size) {
      temp = []
    }
  });
  //返回新数组
  return result
}