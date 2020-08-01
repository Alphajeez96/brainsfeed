import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebook, faLinkedin, faTwitter, faEnvelope, faArrowLeft);

Vue.component("font-awesome-icon", FontAwesomeIcon);

const base = axios.create({
    baseURL: "https://api.jsonbin.io/b/5f20829bc58dc34bf5dca275",
});

Vue.config.productionTip = false;
Vue.prototype.$http = base;
Vue.use(VueAxios, axios);

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");