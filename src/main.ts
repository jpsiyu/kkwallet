import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import appInit from '@/scripts/appInit';

Vue.config.productionTip = false;

/**
 * plugins
 */
import "@/plugins/element.ts";

appInit.init()
  .then(() => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  })
