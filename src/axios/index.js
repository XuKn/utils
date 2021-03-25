// 语法：
// axios(options)
// 参数配置对象：url, method, params与data
// 返回值为：promise对象
// axios.get(url, options)
// axios.post(url, data, options)
// axios.put(url, data, options)
// axios.delete(url, options)
// 功能：使用xhr发送ajax请求的工具函数，与axios库功能类似
function axios({method,url,params={},data}) {
  return new Promise((resolve,reject) => {
    method = method.toUpperCase()
    //创建xhr对象
    const xhr = new XMLHttpRequest()
    //params对象转换成urlincoded 格式
    let queryString = ''
  
    Object.keys(params).forEach((key) => {
      queryString += `${key}=${params[key]}&`
    })
    if (queryString) {
      queryString = queryString.slice(0,-1)
      url += '?'+queryString
    } 
  
    //打开连接
    xhr.open(method,url)
    //发送请求
    if (method === "POST" || method === "PUT" || method === "DELETE" ) {
      xhr.setRequestHeader('Content_Type','application/json')
      xhr.send(JSON.stringify(data))
    }
    if (method === "GET") {
      xhr.send()
    }
    //响应格式为json字符串
    xhr.responseType='json'
    xhr.onreadystatechange =function() {
      if (xhr.readyState !== 4) {
        return 
      }else{
        //请求成功
        if (xhr.status>=200&&xhr.status<=299) {
          console.log(111);
          let response = {
            data : JSON.parse(xhr.response),
            status : xhr.status,
            statusText : xhr.statusText
          }
          resolve(response)
        }else{
          //请求失败
          reject(new Error('请求出错,状态码是'+xhr.status))
        }
      }
    }
  })
}
//get请求
axios.get = function(url,options) {
  return axios(Object.assign(options,{url,method:'GET'}))
}
//post
axios.post = function(url,data,options) {
  return axios(Object.assign(options,{url,method:'POST',data}))
}
//put
axios.put = function(url,data,options) {
  return axios(Object.assign(options,{url,method:'PUT',data}))
}
//delete
axios.delete = function(url,options) {
  return axios(Object.assign(options,{url,method:'DELETE'}))
}
