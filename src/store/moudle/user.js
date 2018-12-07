const user ={
    namespaced: false,//命名空间
    state:{
        username:'admin'
    },
    actions:{},
    mutations:{
        updateuser(state,param){
            state.username=`${param}boss`
        }
    },
    getters:{}    
}
export default user