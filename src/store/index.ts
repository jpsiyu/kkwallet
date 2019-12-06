import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentNet: null
  },
  mutations: {
    setNet: (state, payload) => {
      state.currentNet = payload
    }
  },
  actions: {},
  modules: {}
});
