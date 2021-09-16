// const api_key: b64caab08fba93d81c21d11e24838717
// URL: //api.themoviedb.org/3/trending/movie/day?api_key=b64caab08fba93d81c21d11e24838717

import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const key = 'b64caab08fba93d81c21d11e24838717';

export default {
  actions: {
    async fetchTrendFilms(ctx) {
      const {
        data: { results },
      } = await axios.get(`trending/movie/day?api_key=${key}`);

      ctx.commit('updateTrendFilmList', results); // вызываем метод мутации для изменения стейта
    },
  }, // actions

  mutations: {
    updateTrendFilmList(state, filmList) {
      state.topFilmList = filmList;
    },
  }, // reducer

  state: {
    topFilmList: [],
  },

  getters: {
    trendList(state) {
      return state.topFilmList;
    },
  }, // selector
};
