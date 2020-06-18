import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store';
import VueCookies from 'vue-cookies'
import VueTippy, { TippyComponent } from 'vue-tippy';
import axios from 'axios'
import VueAxios from 'vue-axios'

import "tippy.js/themes/light.css";


Vue.config.productionTip = false

Vue.use(VueTippy, {
  directive: "tippy", // => v-tippy
  flipDuration: 0,

  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false
      },
      hide: {
        enabled: false
      },
    }
  }
});

Vue.component("tippy", TippyComponent);

Vue.use(VueCookies)
Vue.use(VueAxios, axios)

Vue.$cookies.config('7d')
new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
