import VueRouter from 'vue-router'

import Home from './pages/Home'
import About from './pages/About';
import Admin from "./pages/Admin";

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
  ]
})
