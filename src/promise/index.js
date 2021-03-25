// 定义整体结构

// Promise构造函数的实现

// promise.then()/catch()的实现

// Promise.resolve()/reject()的实现

// Promise.all/race()的实现
class Promise{
  constructor(excutor){
    let self = this
    self.PromiseState = 'padding'
    self.PromiseResult = undefined
    self.callBacks = []
    function resolve(data){
      if (self.PromiseState !== 'padding') return
        self.PromiseState = 'fulfilled'
        self.PromiseResult = data
        setTimeout(() => {
          self.callBacks.forEach((obj) => {
            obj.onResolve(data)
          })
        },);  
    }
    function reject(data) {
      if (self.PromiseState !== 'padding')  return
        self.PromiseState = 'rejected'
        self.PromiseResult = data
        setTimeout(() => {
          self.callBacks.forEach((obj) => {
            obj.onReject(data)
          })
        },);
    }
    try {
      excutor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onResolve,onReject){
      let self = this
    if (typeof onResolve !== 'function') {
      onResolve = value =>value
    }
    if (typeof onReject !== 'function') {
      onReject = reason => {
        throw reason
      }
    }
    return new Promise((resolve,reject) => {
        function callBack(type) {
          try {
            let result = type(self.PromiseResult)
            if (result instanceof Promise) {
              result.then(v=>{
                  resolve(v)
                },e=>{
                  reject(e)
                }
              )
            }else{
              resolve(result)
            }
          } catch (err) {
            reject(err)
          }
        }
        if (self.PromiseState === 'fulfilled') {
          setTimeout(() => {
            callBack(onResolve)
          },);
          
        }
        if (self.PromiseState === 'rejected') {
          setTimeout(() => {
            callBack(onReject)
          },);
        }
        if (self.PromiseState === 'padding') {
          self.callBacks.push({
            onResolve:function() {
              callBack(onResolve)
            },
            onReject:function() {
              callBack(onReject)
            }
          })
        }
    })
  }
  catch(onReject){
    return this.then(undefined,onReject)
  }
  static resolve(data){
    return new Promise((resolve,reject) => {
      if(data instanceof Promise){
        data.then((v) => {
          resolve(v)
        },(e) => {
          reject(e)
        })
      }else{
        resolve(data)
      }
    })
  }
  static reject(data){
    return new Promise((resolve,reject) => {
      reject(data)
   })
  }
  static all(promises){
    return new Promise((resolve,reject) => {
      let i = 0
      let arr = []
      promises.forEach((promise) => {
        promise.then((v) => {
          arr[i] = v
          i++ 
          if (i === promises.length) {
            resolve(arr)
          }
        },(err) => {
          reject(err)
        })
      })
    })
  }
  static race(promises){
    return new Promise((resolve,reject) => {
      promises.forEach((promise)=>{
        promise.then(resolve,reject)
      })
    })
  }
}
