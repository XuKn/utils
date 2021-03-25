// 字符串倒序
// 语法: reverseString(str)
// 功能: 生成一个倒序的字符串
// 字符串是否是回文
// 语法: palindrome(str)
// 功能: 如果给定的字符串是回文，则返回 true ；否则返回 false
// 截取字符串
// 语法: truncate(str, num)
// 功能: 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束
function reverseString(str) {
  //生成数组
  let arr = [...str]
  //翻转
  arr.reverse()
  //生成字符串
  let newStr = arr.join('')
  return newStr
}
function palindrome(str) {
  //翻转后是否一样
  return str === reverseString(str)
}
function truncate(str,num) {
  return str.slice(0,num)+'...'
}