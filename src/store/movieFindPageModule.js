import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const key = 'b64caab08fba93d81c21d11e24838717';

const INITIAL_STATE_FILM = [];

export default {
    actions: {
        async movieSearch(ctx, query) {
            const {
                data: {results}
            } = await axios.get(`search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`);

              ctx.commit('updatefindFilmList', results); // вызываем метод мутации для изменения стейта
        },
    }, // actions

    mutations: {
        updatefindFilmList(state, filmList) {
            state.findFilmList = filmList;
        },
        clearFoundedFilmList(state){
            state.findFilmList = INITIAL_STATE_FILM;
        }
    }, // reducer

    state: {
        findFilmList: INITIAL_STATE_FILM,
    },

    getters: {
        foundedFilmList(state) {
            return state.findFilmList;
        },
    }, // selector
};
