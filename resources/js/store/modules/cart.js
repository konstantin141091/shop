import axios from "axios";

window.Vue = require('vue');

export default {
    state: {
        cart: JSON.parse(localStorage.getItem('cart' ) || '[]'),
        // cartCount: 0,
    },
    getters: {
        CART: state => {
            return state.cart
        },
        TOTAL_PRICE_CART: state => {
            return state.cart.reduce((total, product) => {
                return total + product.quantity * product.price
            }, 0)
        },
    },
    mutations: {
        PUSH_PRODUCT_TO_CART: (state, product) => {
            state.cart.push(product);
            Vue.set(product, 'quantity', 1);
            Vue.set(product, 'totalPriceProduct', product.price);
        },

        SAVE_CART: (state) => {
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },

        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },

        INCREMENT: (state, index) => {
            const cartItem = state.cart.find(item => item.id === index);
            cartItem.quantity++
            cartItem.totalPriceProduct = cartItem.quantity * cartItem.totalPriceProduct
        },

        DECREMENT: ( state, index) => {
            console.log(state);
            console.log(state.cart);
            const cartItem = state.cart.find(item => item.id === index);
            if (cartItem.quantity > 1) {
                cartItem.quantity--
                cartItem.totalPriceProduct = cartItem.quantity * cartItem.totalPriceProduct
            }
        },
        DELETE_ALL_CART: (state) => {
            state.cart = {};
            console.log(state.cart);
        }
    },
    actions: {
        ADD_TO_CART: ({commit, state}, product) => {
            const cartItem = state.cart.find(item => item.id === product.id)
            if (!cartItem) {
                commit('PUSH_PRODUCT_TO_CART', product)
            } else {
                commit('INCREMENT', product.id)
            }
            commit('SAVE_CART')
        },

        DECREMENT_TO_PRODUCT: ({commit}, index) => {
            commit('DECREMENT', index)
            commit('SAVE_CART')
        },
        INCREMENT_TO_PRODUCT: ({commit}, index) => {
            commit('INCREMENT', index)
            commit('SAVE_CART')
        },

        DELETE_FROM_CART: ({commit}, index) => {
            commit('REMOVE_FROM_CART', index)
            commit('SAVE_CART')
        },
        CHECKOUT: ( context ) => {
            const savedCartItems = [...context.state.cart]
        },
        CLEAR_CART: ({commit}) => {
            localStorage.clear();
            commit('DELETE_ALL_CART');
        },

        async API_ADD_CART ({ dispatch }, credentials) {
            await axios.get('/sanctum/csrf-cookie');
            const answer = await axios.post('/api/basket', credentials)
              .then((response) => {
                  return response;
              })
              .catch((error) => {
                  return error.response;
              });
            return answer;
        },
    }
}
