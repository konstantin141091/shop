import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './layout/MainLayout'
import router from './router'
import dateFilter from "./utils/date.filter";


Vue.filter('date', dateFilter)
Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(Main)
}).$mount('#app');
