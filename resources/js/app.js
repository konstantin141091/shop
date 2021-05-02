import axios from 'axios'
import Vue from 'vue'
import Vuelidate from "vuelidate/src"
import VueRouter from 'vue-router'
import router from './router'
import {store} from './store'
import Main from './layout/MainLayout'
import dateFilter from "./utils/date.filter"

//Global styles
import '../sass/app.scss'

const APP_URL = process.env.MIX_APP_URL
axios.defaults.withCredentials = true
axios.defaults.baseURL = APP_URL

Vue.filter('date', dateFilter)

Vue.use(VueRouter);
Vue.use(Vuelidate);

store.dispatch('auth/ME').then(() => {
    new Vue({
        store,
        router,
        render: h => h(Main)
    }).$mount('#app')
});
