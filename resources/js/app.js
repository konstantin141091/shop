import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './layout/MainLayout'
import router from './router'
import dateFilter from "./utils/date.filter";
import {store} from './store';

//Global styles
import '../sass/app.scss'

const APP_URL = process.env.MIX_APP_URL
console.log("my env variable:");
console.log(APP_URL)


axios.defaults.withCredentials = true;
axios.defaults.baseURL = APP_URL;
Vue.filter('date', dateFilter);
Vue.use(VueRouter);

store.dispatch('auth/me').then(() => {
    new Vue({
        store,
        router,
        render: h => h(Main)
    }).$mount('#app');
});
