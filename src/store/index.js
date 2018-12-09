import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import user from './moudle/user'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex);
let state =  {
  count: 1,
  num: 2,
  countA: 3,
}
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
   state,
   mutations,
   actions,
   getters,
   modules: {
    user,
  },
  plugins: [createLogger()],
});
