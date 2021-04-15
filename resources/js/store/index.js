import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [],
    categories: [],
  },
  getters: {
    // гетеры продуктов
    PRODUCTS: state => {
      return state.products;
    },
    PRODUCTS_NEWS: state => {
      return state.products.filter(product => product.news);
    },
    PRODUCTS_SALE: state => {
      return state.products.filter(product => product.sale > 0);
    },

    // гетеры категорий
    CATEGORIES: state => {
      return state.categories;
    },

  },
  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.products = payload;
    },
    SET_CATEGORIES: (state, payload) => {
      state.categories = payload;
    },
  },
  actions: {
    // поолучение продуктов из бд
    GET_PRODUCTS: async (context) => {
      axios.get('/api/product')
        .then(response => {
          if (response.data.products) {
            context.commit('SET_PRODUCTS', response.data.products);
          }
        })
        .catch(error => {
          // TODO нужно обработать ошибку и что-то сделать если не придут продукты
          console.log(error);
        });
    },

    // получение категорий из бд

    GET_CATEGORIES: async (context) => {
      axios.get('/api/category')
        .then(response => {
          if (response.data.categories) {
            context.commit('SET_CATEGORIES', response.data.categories);
          }
        })
        .catch(error => {
          // TODO нужно обработать ошибку и что-то сделать если не придут продукты
          console.log(error);
        });
    },

  },
});
