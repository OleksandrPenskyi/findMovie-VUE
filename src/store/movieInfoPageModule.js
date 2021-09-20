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
      return data;
    },

    async getMovieCast(ctx) {
      const { data: { cast } } = await axios.get(
        `movie/${ctx.getters.movieId}/credits?api_key=${key}&language=en-US`,
      );
      return cast;
    },
    async getMovieReviews(ctx) {
      const { data: { results } } = await axios.get(
        `movie/${ctx.getters.movieId}/reviews?api_key=${key}&language=en-US&page=1`,
      );
      return results;
    }
  }, // actions

  mutations: {}, // reducer

  state: {},

  getters: {}, // selector
};
