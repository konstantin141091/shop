import VueRouter from 'vue-router'

import Home from './pages/Home'
import About from './pages/About';
import Admin from "./pages/Admin";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";

export default new VueRouter( {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: Delivery
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
  ]
})
