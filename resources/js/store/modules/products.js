import axios from "axios";

export default {
    state: {
        products: [
            {
                id: 1,
                name: 'Сосиски Кроха',
                img: 'Sosiski_kroha.png',
                price: 100,
                unit: "кг"
            },
            {
                id: 2,
                name: 'Колбаса вареная молочная',
                img: 'Kolbasa_varennaya_Molochnaya.png',
                price: 500,
                unit: 'шт'
            },
        ],
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
        SET_PRODUCTS: (state, payload) => {
            state.products = payload;
        },
    },

    actions: {
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
    }
}
