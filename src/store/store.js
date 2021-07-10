import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false
  },
  mutations: {
    changeisLogin(state,value){
      state.isLogin = value
    }
  },
  actions: {
    setLogin(context,value){
      context.commit('changeisLogin',value);
    }
  },
  modules: {
  }
})
