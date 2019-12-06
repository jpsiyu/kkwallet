import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentNet: null,
    currentAcc: null,
  },
  mutations: {
    setNet: (state, payload) => {
      state.currentNet = payload
    },
    setAcc: (state, payload) => {
      state.currentAcc = payload
    }
  },
  actions: {},
  modules: {}
});
