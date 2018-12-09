####vuex使用
把vuex当做一个全局组件  
 state  相当于组件的data 通过$store.state.value（value:你要取的值）拿到 
 acitions mutations 相当于组件的methods 
 acitons 是异步的(例如ajax)   mutations是同步的 
 acitons 通过$store.dispatch  
 mutions 通过$store.commit 触发 
 //同步流程的写法  
 组件commit--->mutations --->操作state 
 组件(或者全局)触发commit[写法：this.$store.commit('事件名',参数《可选项》)]-->mutations mutations写 和commit事件名同名的函数，参数state(必须)和传的值(可选) --->事件里面操作state 
 //异步的流程 
 组件dispacth--->actions commit  --->mutations --->操作state 
 组件(或者全局)触发dispatch[写法：this.$store.dispatch('事件名',参数《可选项》)] --->actions 写一个同dispatch事件名相同的函数，参数是{commit}和传的值 --->通过commit提交给mutations[写法：commit('事件名一般会和aciton的方法同名')]--->mutations写事件处理操作state 
 >辅助函数运用时候的特点 
值 mapState mapGetters  放在computed 里面
函数 mapActions mapMutations  放在methods里面 
> moudle 的注意事项
有命名空间的mapState的时候 可以传递模块名 
没有命名空间的不能传递模块名

没有命名空间的 actions 和mutatiosn会注册在全局上 
有命名空间的在自己的模块上
定义在开发环境(development)使用严格模式 
在生产环境(production)中不使用严格模式 
``` 
 strict:process.env.NODE_ENV !== 'production',  
 ```
 logger 插件 

 import createLogger from 'vuex/dist/logger'

 ####vuex 拆分的流程 步骤
 默认导出 export default 
 引入    用import引入
 挂载    放在Vuex.Store实例对象上 
>拆分的原理  把1的写法变成3的写法 
//1
let store= {
   info:{
     name:'lili'
   }
} 
//2
let info = {name:'lili'}
let store = {
  info:info
}
//3
let info = {name:'lili'}
let store = {
  info
}

 
  
