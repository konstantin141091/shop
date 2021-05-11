import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth'
import cart from './modules/cart'
import categories from './modules/categories'
import products from './modules/products'
import order from './modules/order'
import all from './modules/all'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth, categories, products, cart, all, order
  }
});
