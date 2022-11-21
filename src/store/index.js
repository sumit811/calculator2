import { createStore } from 'vuex'

export default createStore({
  state: {
    output:''
  },
  getters: {
  },
  mutations: {
    output(state,num){
      if(state.output === '' || state.output === null || state.output === undefined || state.output==="undefined3") {
        state.output = num;
      } else {
        state.output = state.output+num;
      }
      
    },
    result(state){
      console.log('pressed enter');
      let lastchar = state.output.slice(-1); 
      if(!isNaN(lastchar)){
        state.output = eval(state.output);
      }
    },
    clear(state){
      state.output = '';
    },
    backspace(state){
      state.output = state.output.slice(0, -1);
    }
  },
  actions: {
  },
  modules: {
  }
})
