import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './layout/MainLayout'
import router from './router'
import dateFilter from "./utils/date.filter";
import {store} from './store';


Vue.filter('date', dateFilter);
Vue.use(VueRouter);

new Vue({
    store,
    router,
    render: h => h(Main)
}).$mount('#app');
