export default {
    state: {
        cart: JSON.parse(localStorage.getItem('cart' ) || '[]'),
    },
    getters: {
        CART: state => {
            return state.cart
        },

    },
    mutations: {
        SET_CART: (state, product) => {
            if(state.cart.length) {
                let isProductExists = false
                state.cart.map(item => {
                    if(item.id === product.id) {
                        isProductExists = true
                        item.count++
                    }
                })
                if (!isProductExists) {
                    state.cart.push(product)
                }
            } else {
                state.cart.push(product)
            }
        },

        SAVE_CART: (state) => {
            window.localStorage.setItem('cart', JSON.stringify(state.cart))
        },

        REMOVE_FROM_CART: (state, productIndex) => {
            state.cart.splice(productIndex, 1)
        },

        INCREMENT: (state, index) => {
            state.cart[index].count++
        },

        DECREMENT: (state, index) => {
            if(state.cart[index].count > 1) {
                state.cart[index].count--
            }
        }

    },
    actions: {
        ADD_TO_CART: ({commit}, product) => {
            commit('SET_CART', product)
            commit('SAVE_CART')
        },

        DECREMENT_CART_ITEM: ({commit}, index) => {
            commit('DECREMENT', index)
        },

        INCREMENT_CART_ITEM: ({commit}, index) => {
            commit('INCREMENT', index)
        },

        DELETE_FROM_CART: ({commit}, productIndex) => {
            commit('REMOVE_FROM_CART', productIndex)
            commit('SAVE_CART')
        }
    }
}
