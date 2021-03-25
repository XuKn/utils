// PubSub: 包含所有功能的订阅/发布消息的管理者
// PubSub.subscribe(msg, subscriber): 订阅消息: 指定消息名和订阅者回调函数
// PubSub.publish(msg, data): 异步发布消息: 指定消息名和数据
// PubSub.publishSync(msg, data): 同步发布消息: 指定消息名和数据
// PubSub.unsubscribe(flag): 取消订阅: 根据标识取消某个或某些消息的订阅
//订阅发布管理者
const PubSub = {}
//回调容器
let callBacks = {
  // add : {1:ss,2:sss}
}
//唯一标识
let id = 0
//订阅
PubSub.subscribe = function(msg,subscriber) {
  //标识
   let token = 'token_'+ ++id
  //有则添加无则赋值
  if (callBacks[msg]) {
    callBacks[msg][token] = subscriber
  }else{
    callBacks[msg] = {[token]:subscriber}
  }
  //返回唯一标识
  return token
}
//异步发布
PubSub.publish = function(msg,data) {
  if (callBacks[msg]) {
    //遍历得到回调
    Object.values(callBacks[msg]).forEach((callback) => {
      setTimeout(() => {
        callback(data)
      }, );
    })
  }
}
//同步发布
PubSub.publishSync = function(msg,data) {
  if (callBacks[msg]) {
    //遍历得到回调
    Object.values(callBacks[msg]).forEach((callback) => {
        callback(data)
    })
  }
}
//取消订阅
PubSub.unsubscribe = function(flag) {
  //如果有值
  if (flag) {
    //如果不是token
    if (flag.indexOf('token_') === -1) {
      delete callBacks[flag]
    }else{
      //找到符合flag的对象属性并删除
      let objs = Object.values(callBacks)
      objs.forEach((obj) => delete obj[flag])
    }
  }else{
    //没传则全部取消
    callBacks = {}
  }
}
