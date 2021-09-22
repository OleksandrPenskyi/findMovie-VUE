import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  //   base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('@/views/Movies.vue'),
    },
    {
      path: '/movie/:id',
      name: 'movieInfo',
      component: () => import('@/views/MovieInfo.vue'),
      children: [
        {
          path: 'actors',
          name: 'actors',
          component: () => import('@/components/ActorsList/ActorsList.vue'),
        },
        {
          path: 'reviews',
          name: 'reviews',
          component: () => import('@/components/ReviewsList/ReviewsList.vue'),
        }
      ],
    },
    {
      path: '*',
      name: 'error',
      component: () => import('@/views/Nopage.vue'),
    },
  ],
});
