import axios from 'axios'
import Vue from 'vue'
import Vuelidate from "vuelidate/src"
import VueSlickCarousel from 'vue-slick-carousel'
import VueBreadcrumbs from 'vue-2-breadcrumbs'
import Paginate from 'vuejs-paginate'
import VueRouter from 'vue-router'
import router from './router'
import {store} from './store'
import Main from './layout/MainLayout'
import dateFilter from "./utils/date.filter"

// styles
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import '../sass/app.scss'

const APP_URL = process.env.MIX_APP_URL;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = APP_URL;
Vue.filter('date', dateFilter);

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueBreadcrumbs);
Vue.component('VueSlickCarousel', VueSlickCarousel);
Vue.component('Paginate', Paginate)

store.dispatch('auth/ME').then(() => {
    new Vue({
        store,
        router,
        render: h => h(Main)
    }).$mount('#app')
});
