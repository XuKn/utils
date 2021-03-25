//删除与数组中相同的一些元素
function pull(arr,...values) {
  //如果数组的长度为0 返回[]
  if(arr.length===0){
    return []
  }
  //定义一个新数组
  let result = []
  //原数组遍历
  for (let i = 0; i < arr.length; i++) {
    //判断是否有相同元素
    if (values.indexOf(arr[i]) !== -1) {
      result.push(arr[i])
      arr.splice(i,1)
      //原数组改变下标也改变了
      i--
    }
  }
  //返回新数组
  return result
}
function pullAll(arr,values) {
  return pull(arr,...values)
}