//DOM事件监听带委托
//语法：addEventListener(element, type, fn, selector)
// 说明：如果selector没有，直接给element绑定事件，如果selector有，将selector对应的多个元素的事件委托绑定给父元素element
function addEventListener(element,type,fn,selector) {
  //如果传入的是选择器
  if (typeof element === 'string') {
    element = document.querySelector(element)
  }
  //是否委托
  if (!selector) {
    element.addEventListener(type,fn)
  }else{
    //带委托
    element.addEventListener(type,function(e) {
      //与点击的标签匹配时调用回调
      const target = e.target
      if (target.matches(selector)) {
        fn.call(target,e)
      }
    })
  }
}