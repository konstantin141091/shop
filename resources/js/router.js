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
import UserAgreement from "./pages/UserAgreement";
import ReturnPolicy from "./pages/ReturnPolicy";
import Order from "./pages/Order";

export default new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
        meta: {
            breadcrumb: {
                label: 'Главная'
            }
        }
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: Catalog,
        meta: {
            breadcrumb: {
                label: 'Каталог',
                parent: 'home'
            }
        }
    },
    {
        path: '/catalog/:id',
        name: 'product',
        component: ProductPage,
        meta: {
            breadcrumb: {
              label: 'Product',
              parent: 'catalog'
            }
        }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
        meta: {
            breadcrumb: {
                label: 'О компании',
                parent: 'home'
            }
        }
    },

    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
        meta: {
            breadcrumb: {
                label: 'Контакты',
                parent: 'home'
            }
        }
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: Delivery,
        meta: {
            breadcrumb: {
                label: 'Доставка',
                parent: 'home'
            }
        }
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment,
        meta: {
            breadcrumb: {
                label: 'Оплата',
                parent: 'home'
            }
        }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },

    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/order',
      name: 'order',
        component: Order,
    },
    {
      path: '/user-agreement',
      name: 'user-agreement',
      component: UserAgreement,
        breadcrumb: {
            label: 'Пользовательское соглашение',
            parent: 'home'
        }
    },
    {
      path: '/return-policy',
      name: 'return-policy',
      component: ReturnPolicy,
        meta: {
            breadcrumb: {
                label: 'Политика возврата',
                parent: 'home'
            }
        }
    },
      {
          path: '/login',
          name: 'login',
          component: Login,
      },
      {
          path: '/register',
          name: 'register',
          component: Register,
      },
      // {
      //     path: '/admin',
      //     name: 'admin',
      //     component: Admin,
      //     meta: {
      //         breadcrumb: {
      //             label: 'Кабинет администратора',
      //             parent: 'home'
      //         }
      //     }
      // },
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

