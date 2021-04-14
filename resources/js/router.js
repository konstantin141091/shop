import VueRouter from 'vue-router'

import Home from './pages/Home'
import About from './pages/About';
import Admin from "./pages/Admin";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";

export default new VueRouter( {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
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
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/*',
      component: PageNotFound
    },
  ]
})
