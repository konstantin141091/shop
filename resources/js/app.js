import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './layout/MainLayout'
import router from './router'


Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(Main)
}).$mount('#app');
