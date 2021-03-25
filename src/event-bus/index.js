// eventBus: 包含所有功能的事件总线对象
// eventBus.on(eventName, listener): 绑定事件监听
// eventBus.emit(eventName, data): 分发事件
// eventBus.off(eventName): 解绑指定事件名的事件监听, 如果没有指定解绑所有

//创建事件总线对象
const eventBus = {}
//创建回调函数容器
let callBacks = {}
//绑定事件监听
eventBus.on=function(eventName,listener) {
  //如果对象中有则添加
  if (callBacks[eventName]) {
    callBacks[eventName].push(listener)
  }else{
    callBacks[eventName] = [listener]
  }
}

//分发事件
eventBus.emit = function(eventName,data) {
  //有则执行回调
  if (callBacks[eventName]) {
    //遍历所有回调
    callBacks[eventName].forEach(callBack => {
      callBack(data)
    });
  }
}
//解绑事件
eventBus.off = function(eventName) {
  if (eventName) {
    delete callBacks[eventName]
  }else{
    callBacks = {}
  }
}

