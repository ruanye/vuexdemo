import * as Types from './mutations-types'
//'ADD_COUNT' Types.ADD_COUNT obj.name obj[name] ['ADD_COUNT'] ;
const mutations = {
   [Types.ADD_COUNT](state) {
        state.count += 10;
      },
      except(state) {
        state.num *= 2;
      },
      minucount(state, param) {
        // state.countA-=param;
        state.countA = param.a + param.b;
      }
}
export default mutations
