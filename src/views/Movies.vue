<template>
  <section class="moviesPage">
    <Main>
      <FilmList v-if="isListExist" :listOfFilms="searchFilmList" />
      <a-input allow-clear v-model="$store.state.firstInput" size="large" />
    </Main>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import FilmList from "@/components/FilmList.vue";
import Main from "../сontainers/Main.vue";
import SearchMovieForm from "@/components/SearchMovieForm.vue";

export default {
  name: "Movies",
  created() {
    const query = this.$route.query.query;
    query && this.onSearch(query);
  },
  data() {
    return {
      searchFilmList: [],
    };
  },
  watch: {
    $route(newSearch, oldSearch) {
      const newQuery = newSearch.query.query;
      const oldQuery = oldSearch.query.query;

      if (newQuery !== oldQuery && newQuery.length) {
        this.onSearch(newQuery);
      }
    },
  },
  computed: {
    ...mapState({
      state: (state) => state.firstInput,
    }),
    isListExist() {
      return this.searchFilmList.length > 0;
    },
  },
  methods: {
    ...mapActions(["movieSearch"]),

    async onSearch(query) {
      try {
        const data = await this.movieSearch(query);
        this.searchFilmList = [...data];
      } catch (error) {
        console.log(error);
      }
    },
  },

  components: {
    FilmList,
    Main,
    SearchMovieForm,
  },
};
</script>

<style lang="scss" scoped>
.input__wrapper {
  width: 350px;
}
</style>