import Vue from 'vue';
import Vuex from 'vuex';

import homePageModules from './homePageModule';
import movieInfoPageModule from './movieInfoPageModule';
import movieFindPageModule from './movieFindPageModule'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    homePageModules,
    movieInfoPageModule,
    movieFindPageModule
  },
});
