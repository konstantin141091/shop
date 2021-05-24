// import axios from "axios";
import * as productsApi from '/resources/js/api/products'

export default {
  namespaced: true,

  state: {
    products: [],
  },

  getters: {
    PRODUCTS: state => {
      return state.products;
    },
    PRODUCTS_NEW: state => {
      return state.products.filter(product => product.news);
    },
    PRODUCTS_SALE: state => {
      return state.products.filter(product => product.sale > 0);
    },
    PRODUCT_ONE: state => id => state.products.find(pr => pr.id == id),
  },

  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
  },

  actions: {
    async GET_PRODUCTS({commit}) {
      let products = await productsApi.all()
      commit('SET_PRODUCTS', products)
      return products
    }


    // GET_PRODUCTS: async ({commit}) => {
    //     axios.get('/api/product')
    //         .then(response => {
    //             if (response.data.products) {
    //                 commit('SET_PRODUCTS', response.data.products);
    //             }
    //             return response
    //         })
    //         .catch(error => {
    //             // TODO нужно обработать ошибку и что-то сделать если не придут продукты
    //             console.log(error);
    //             return error
    //         });
    // },
  }
}
