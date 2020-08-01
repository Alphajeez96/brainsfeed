import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Paginate from "vuejs-paginate";



library.add(faUserSecret, )

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component("paginate", Paginate);

const base = axios.create({
    baseURL: "https://api.jsonbin.io/b/5f20829bc58dc34bf5dca275",
});

Vue.config.productionTip = false
Vue.prototype.$http = base;
Vue.use(VueAxios, axios);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')