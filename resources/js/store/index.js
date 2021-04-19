import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      products: [],
      categories: [],
      cart: [
          {
              name: 'Сосиски Кроха',
              img: 'Sosiski_kroha.png',
              price: 100,
              unit: "кг"
          },
          {
              name: 'Колбаса вареная молочная',
              img: 'Kolbasa_varennaya_Molochnaya.png',
              price: 500,
              unit: 'шт'
          },
      ],
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

    // геттеры Корзины
    CART: state => {
        return state.cart
    }
  },
  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.products = payload;
    },
    SET_CATEGORIES: (state, payload) => {
      state.categories = payload;
    },

      //Корзина
      SET_CART: (state, product) => {
        state.cart.push(product)
      }
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

      //Корзина
      ADD_TO_CART: ({commit}, product) => {
          commit('SET_CART', product)
      }
  },
});
