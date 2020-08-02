import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import moment from "moment";
import VueProgressBar from "vue-progressbar";
import swal from "sweetalert2";

require("./bootstrap");
window.Vue = require("vue");

window.swal = swal;

const toast = swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;

Vue.config.productionTip = false;
Vue.use(VueProgressBar, {
  color: "rgb(143, 255, 199)",
  failedColor: "red",
  height: "3px"
});

Vue.filter("upText", function(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter("myDate", function(created) {
  return moment(created).format("MMMM Do YYYY");
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
