//语法: object mergeObject(...objs)
// 功能: 合并多个对象, 返回一个合并后对象(不改变原对象)
// 例子:
// { a: [{ x: 2 }, { y: 4 }], b: 1}
// { a: { z: 3}, b: [2, 3], c: 'foo'}
// 合并后: { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
function mergeObject(...objs) {
  //创建一个新对象
  let result = {}
  //遍历所有参数
  objs.forEach((obj) => {
    //遍历对象属性
    Object.keys(obj).forEach((key) => {
      //判断是否存在
      if (result[key]) {
        //存在则添加 运用连接数组的方法
        result[key] = [].concat(result[key],obj[key])
      }else{
        //无则 赋值
        result[key] = obj[key]
      }
    })
  })
  //返回新对象
  return result
}