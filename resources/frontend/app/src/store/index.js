import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      username:'',
      role:0
    },
    token: '',
    isAuthenticated:false
  },
  getters: {
  },
  mutations: {
    /*Comment on this if you want to change "IsAuthenticated" manually*/
    initializeStore(state){
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token');
        state.isAuthenticated = true
      }else{
        state.token = ''
        state.isAuthenticated = false
      }
    },
    setToken(state,token){
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state){
      state.token = ''
      state.isAuthenticated = true
    },
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
  },
  actions: {
  },
  modules: {
  }
})
