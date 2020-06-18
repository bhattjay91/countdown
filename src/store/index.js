import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function getDefaultDate(){
  let date = 'Dec 31, 2030 22:00:00'
  if(getCookie('countDownTime') != undefined){
    date = decodeURIComponent(getCookie('countDownTime'))
  }
  return date
}

export const store = new Vuex.Store({
  state: {
    date: getDefaultDate(),
  },

  getters:{
    getDate (state) {
      return state.date
    }
  },
  actions:{
    setDate(state, value){
      state.commit('pushDate', value)
    }
  },
  mutations:{
    pushDate(state, value){
      state.date = value
    }
  }
});
