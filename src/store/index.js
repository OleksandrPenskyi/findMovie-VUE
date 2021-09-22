import Vue from 'vue';
import Vuex from 'vuex';

import homePageModules from './homePageModule';
import movieInfoPageModule from './movieInfoPageModule';
import movieFindPageModule from './movieFindPageModule'

Vue.use(Vuex);

import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const key = 'b64caab08fba93d81c21d11e24838717';

export default new Vuex.Store({
  modules: {
    homePageModules,
    movieInfoPageModule,
    movieFindPageModule
  },

  actions: {
    async movieSearch(ctx, query) {
      const {
        data: { results }
      } = await axios.get(`search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`);
      return results;
    },

    async fetchTrendFilms() {
      const {
        data: { results },
      } = await axios.get(`trending/movie/day?api_key=${key}`);
      return results
    },

    async getFullMovieInfo(ctx, id) {
      const { data } = await axios.get(
        `movie/${id}?api_key=${key}&language=en-US`
      );
      return data;
    },

    async getMovieCast(ctx, id) {
      const { data: { cast } } = await axios.get(
        `movie/${id}/credits?api_key=${key}&language=en-US`,
      );
      return cast;
    },

    async getMovieReviews(ctx, id) {
      const { data: { results } } = await axios.get(
        `movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
      );
      return results;
    }
  },

  mutations: {
    showActors() {
      this.state.isActorsVisible = !this.state.isActorsVisible;
      this.state.isReviewsVisible = false;
    },

    showReviews() {
      this.state.isReviewsVisible = !this.state.isReviewsVisible;
      this.state.isActorsVisible = false;
    },
  },

  state: {
    isActorsVisible: false,
    isReviewsVisible: false,
  },

  getters: {
    getActorsVisible(state) {
      return state.isActorsVisible;
    },

    getReviewsVisible(state) {
      return state.isReviewsVisible;
    },
  },
});
