//一、函数参数的结构赋值
//在函数的参数里面可以进行解构赋值 
let obj = {name:'guodongshuai',age:3}
function fn({name='lili'}){
  console.log(name)
}
fn(obj)
//可以设置默认值 
let obj1 = {}
function fn({name='lili'}){
  console.log(name)
}
fn(obj1)