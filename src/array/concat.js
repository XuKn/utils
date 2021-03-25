/**
 * 
 * @param {Array} arr 
 * @param  {...any} args 
 */
//连接数组
function concat(arr,...args) {
  //定义一个新数组
  let result = [...arr]
  //遍历数组
  args.forEach((item) => {
    //判断值是否为数组
    if(Array.isArray(item)){
      result.push(...item)
    }else{
      result.push(item)
    }
  })
  return result
}