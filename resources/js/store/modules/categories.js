import * as categoriesApi from "../../api/categories";

export default {
  state: {
    categories: [],
  },

  getters: {
    CATEGORIES: state => state.categories,
  },

  mutations: {
    SET_CATEGORIES: (state, payload) => {
      state.categories = payload;
    },
  },

  actions: {
    async GET_CATEGORIES ({commit}) {
      let categories = await categoriesApi.all()
      commit('SET_CATEGORIES', categories)
      return categories


      // axios.get('/api/category')
      //   .then(response => {
      //     if (response.data.categories) {
      //       context.commit('SET_CATEGORIES', response.data.categories);
      //     }
      //   })
      //   .catch(error => {
      //     // TODO нужно обработать ошибку и что-то сделать если не придут продукты
      //     console.log(error);
      //   });
    },
  }
}
