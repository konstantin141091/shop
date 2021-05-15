import VueRouter from 'vue-router'

import Home from './pages/Home'
import About from './pages/About';
import Admin from "./pages/Admin";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Catalog from "./pages/Catalog";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import Account from "./pages/Account";
import AccountHistory from "./pages/account/History";
import AccountProfile from "./pages/account/Profile";
import AdminMain from "./pages/admin/AdminMain";
import AdminProduct from "./pages/admin/AdminProduct";
import AdminCategory from "./pages/admin/AdminCategory";

export default new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: () => import('./pages/Catalog'),
    },
    {
        path: '/catalog/:id',
        name: 'product',
        component: () => import('./pages/ProductPage'),
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
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/order',
      name: 'order',
        component: () => import('./pages/Order'),
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      children: [
        {
          path: 'history',
          component: AccountHistory
        },
        {
          path: 'profile',
          component: AccountProfile
        },
        {
          path: 'admin',
          component: AdminMain,
        },
        {
          path: 'admin/product',
          component: AdminProduct,
        },
        {
          path: 'admin/category',
          component: AdminCategory,
        },
      ],
    },
    {
      path: '/*',
      name: 'notFound',
      component: PageNotFound
    },
  ]
})
