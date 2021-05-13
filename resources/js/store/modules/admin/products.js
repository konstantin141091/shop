import axios from "axios";

export default {
  namespaced: true,
  state: {

  },

  getters: {

  },

  mutations: {

  },

  actions: {
    async PRODUCTS_IMPORT ({dispatch, state}, credentials) {
      console.log('in store', credentials);
      await axios.get('/sanctum/csrf-cookie');
      const answer = await axios.post('/api/admin/product/import', credentials, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((error) => {
          console.log(error);
          return error.response;
        });
      return answer;
    },
  }
}
