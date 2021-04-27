import axios from 'axios'

export default {
  namespaced: true,

  state: {
    AUTHENTICATED: false,
    USER: null,
    USER_TOKEN: null,
  },

  getters: {
    AUTHENTICATED (state) {
      return state.AUTHENTICATED
    },
    USER (state) {
      return state.USER
    },
    USER_TOKEN (state) {
      return state.USER_TOKEN
    },
  },

  mutations: {
    SET_AUTHENTICATED (state, value) {
      state.AUTHENTICATED = value
    },

    SET_USER (state, value) {
      state.USER = value
    },

    SET_USER_TOKEN(state, value) {
      state.USER_TOKEN = value
    }
  },

  actions: {
    async SIGN_IN ({ dispatch }, credentials) {
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/login', credentials);

      return dispatch('ME')
    },

    async SIGN_OUT ({ dispatch }) {
      await axios.post('/logout');

      return dispatch('ME')
    },

    async REGISTER ({ dispatch }, credentials) {
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/register', credentials);

      return dispatch('ME')
    },

    async EDIT ({dispatch, state}, credentials) {
      console.log(credentials);
      await axios.get('/sanctum/csrf-cookie');
      await axios.put('/api/user/edit', credentials, {
        headers: {Authorization: state.USER_TOKEN},
      });

      return dispatch('ME')
    },

    ME ({ commit, state }) {
      return axios.get('/api/user')
        .then((response) => {
        commit('SET_AUTHENTICATED', true);
        commit('SET_USER', response.data);
      }).then(() => {
          axios.get('/api/user/token', {params: {email: state.USER.email}})
            .then((response) => {
              commit('SET_USER_TOKEN', response.data.token);
            })
        })
        .catch((error) => {
          console.log(error);
        commit('SET_AUTHENTICATED', false);
        commit('SET_USER', null)
      })
    }
  }
}
