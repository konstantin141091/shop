import axios from "axios";

export default {
    state: {
        products: [],
    },

    getters: {
        PRODUCTS: state => {
            return state.products;
        },
        PRODUCTS_NEWS: state => {
            return state.products.filter(product => product.news);
        },
        PRODUCTS_SALE: state => {
            return state.products.filter(product => product.sale > 0);
        },
    },

    mutations: {
        SET_PRODUCTS: (state, products) => {
            state.products = products;
        },
    },

    actions: {
        GET_PRODUCTS: async ({commit}) => {
            axios.get('/api/product')
                .then(response => {
                    if (response.data.products) {
                        commit('SET_PRODUCTS', response.data.products);
                    }
                    return response
                })
                .catch(error => {
                    // TODO нужно обработать ошибку и что-то сделать если не придут продукты
                    console.log(error);
                    return error
                });
        },
    }
}
