<template>
 <div class="vuexbox">
    <!-- 同步的vuex -->
    <div class="demobox">
     <button @click="increase" class="btn">+</button>
     <span>{{$store.state.count}}</span>
    </div>
     <!-- 异步的vuex  -->
    <div class="demobox">
     <button @click="increaseA" class="btn">x</button>
     <span>{{$store.state.num}}</span>
    </div>
    <!-- 参数 -->
     <div class="demobox">
     <button @click="increaseB" class="btn">-</button>
     <span>{{$store.state.countA}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
   },
  computed:{
   
     
   },
   methods:{
     //同步触发
    increase(){
      this.$store.commit('addcount')
    },
    //异步触发
    increaseA(){
      this.$store.dispatch('except')
    },
    //参数
    increaseB(){
      //一个参数 
      // this.$store.commit('minucount',3)
      //多个参数
       this.$store.commit('minucount',{a:13,b:9})
       
      // this.$store.commit({
      //   type:'minucount',
      //   a:14,
      //   b:9
      // })
    }

   }
}
</script>


<style lang='less' scoped>
.demobox{
  padding-top: 20px;
}
.vuexbox{
   position: relative;
   
  text-align: center;
  button,span{
    display: inline-block;
    width: 200px;
    height: 50px;
    line-height: 50px;
    margin: 0 10px;
    background-color:chocolate;
    color:#fff;
    font-size: 32px;
    outline: none;
    border: none;
    cursor: pointer;
  }
  span{
    background: #fff;
    color: #000;
    font-size: 36px;
   
  }
 

}

</style>

