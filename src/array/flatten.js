//数组扁平化 多维数组变成一维数组
          //    [1,2,4,[3,5,[4,5]]]
          //     [3,5,[4,5]]
          //      [4,5]
function flatten(arr) {
  //定义一个新数组
  let result = []
  //遍历原数组
  arr.forEach(item => {
    //判断是否为数组
    if (Array.isArray(item)) {
      result = result.concat(flatten(item))
    }else{
      result.push(item)
    }
  });
  //返回新数组
  //4,5
  //3,5,4,5
  //1,2,4,3,5,4,5
  console.log(result);
  return result 
}
function flatten2(arr) {
  //定义一个新数组
  let result = [...arr]
  //判断是否含有数组
  while (result.some(item=>Array.isArray(item))) {
    result = [].concat(...result)
  }
  //返回新数组
  return result
}