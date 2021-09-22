// // import axios from 'axios';
// // axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// // const key = 'b64caab08fba93d81c21d11e24838717';

// export default {
//     actions: {
//         // async getFullMovieInfo(ctx, id) {
//         //   const { data } = await axios.get(
//         //     `movie/${id}?api_key=${key}&language=en-US`
//         //   );
//         //   return data;
//         // },

//         // async getMovieCast(ctx, id) {
//         //   const { data: { cast } } = await axios.get(
//         //     `movie/${id}/credits?api_key=${key}&language=en-US`,
//         //   );
//         //   return cast;
//         // },

//         // async getMovieReviews(ctx, id) {
//         //   const { data: { results } } = await axios.get(
//         //     `movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
//         //   );
//         //   return results;
//         // }
//     },

//     mutations: {
//         showActors() {
//             this.state.isActorsVisible = !this.state.isActorsVisible;
//             this.state.isReviewsVisible = false;
//         },

//         showReviews() {
//             this.state.isReviewsVisible = !this.state.isReviewsVisible;
//             this.state.isActorsVisible = false;
//         },
//     },

//     state: {
//         isActorsVisible: false,
//         isReviewsVisible: false,
//     },

//     getters: {
//         getActorsVisible(state) {
//             return state.isActorsVisible;
//         },

//         getReviewsVisible(state) {
//             return state.isReviewsVisible;
//         },
//     },
// };
