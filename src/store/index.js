import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex);

import user from './moudle/user'


export default new Vuex.Store({
  strict:process.env.NODE_ENV !== 'production',
  state: {
     count:1,
     num:2,
     countA:3
  },
  mutations: {
    addcount(state){
        state.count+=10
    },
    except(state){
        state.num*=2
    },
    minucount(state,param){
      //state.countA-=param;
      state.countA =param.a+param.b
    }
  },
  actions: {
     except({commit}){
       commit('except')
     }
     },
   modules:{
       user 
    },
    plugins:[createLogger()]
});
