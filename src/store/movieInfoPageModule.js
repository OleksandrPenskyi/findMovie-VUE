// const api_key: b64caab08fba93d81c21d11e24838717
// URL: //api.themoviedb.org/3/trending/movie/day?api_key=b64caab08fba93d81c21d11e24838717
import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const key = 'b64caab08fba93d81c21d11e24838717';

export default {
  actions: {
    async getFullMovieInfo(ctx, id) {
      const { data } = await axios.get(
        `movie/${id}?api_key=${key}&language=en-US`
      );

      ctx.commit('updateMovieInfo', data); // вызываем метод мутации для изменения стейта
    },

    async getMovieCast(ctx, id) {
      const { data } = await axios.get(
        `movie/${id}/credits?api_key=${key}&language=en-US`,
      );
      ctx.commit("updateActorsInfo", data.cast)
    }
  }, // actions

  mutations: {
    updateMovieInfo(state, data) {
      state.movie = data;
    },

    updateActorsInfo(state, data) {
      state.actors = data;
    },
  }, // reducer

  state: {
    movie: null,
    actors: null
  },

  getters: {
    movieDescription(state) {
      return state.movie;
    },
    actorsDescription(state) {
      return state.actors;
    },
  }, // selector
};
