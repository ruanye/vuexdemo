<template>
  <div class="vuexbox">
    <div>{{$store.state.user.username}}</div>
    <div>模块写法{{username}}</div>
    <button @click="updateUser">修改用户名</button>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    // 带命名空间获取state的方法
  // ...mapState('user',['username'])
  //  ...mapState('user',{
  //     username:state=>state.username
  //   })
    // 不带命名空间的写法
    ...mapState({
      username: state => state.user.username,
    }),
  },
  methods: {
    updateUser() {
      // this.$store.commit('user/updateuser')
      this.$store.commit('updateuser', 'youare');
    },
  },
};
</script>


<style lang='less' scoped>
.demobox {
  padding-top: 20px;
}
.vuexbox {
  font-size: 36px;
  position: relative;

  text-align: center;
  button,
  span {
    display: inline-block;
    width: 200px;
    height: 50px;
    line-height: 50px;
    margin: 0 10px;
    background-color: chocolate;
    color: #fff;
    font-size: 32px;
    outline: none;
    border: none;
    cursor: pointer;
  }
  span {
    background: #fff;
    color: #000;
    font-size: 36px;
  }
}
</style>
