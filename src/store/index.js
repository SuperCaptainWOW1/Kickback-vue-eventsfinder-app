import Vue from "vue";
import Vuex from "vuex";

import info from "./info";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeUserImage:
      "https://pbs.twimg.com/profile_images/1193578538898743299/HSkwiy3-_400x400.jpg"
  },
  mutations: {},
  actions: {},
  modules: {
    info
  }
});
