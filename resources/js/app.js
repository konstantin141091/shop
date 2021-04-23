import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './layout/MainLayout'
import router from './router'
import dateFilter from "./utils/date.filter";
import {store} from './store';


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://laravel.local/';
Vue.filter('date', dateFilter);
Vue.use(VueRouter);

store.dispatch('auth/me').then(() => {
    new Vue({
        store,
        router,
        render: h => h(Main)
    }).$mount('#app');
});
