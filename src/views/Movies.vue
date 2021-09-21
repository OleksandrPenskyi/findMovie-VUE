<template>
  <section class="moviesPage">
    <Main>
      <SearchMovieForm />
      <FilmList v-if="isListExist" :listOfFilms="searchFilmList" />
    </Main>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import FilmList from "@/components/FilmList.vue";
import Main from "../сontainers/Main.vue";
import SearchMovieForm from "@/components/SearchMovieForm.vue";

export default {
  name: "Movies",

  created() {
    const query = this.$route.query.query;
    if (query) {
      this.onSearch(query);
    }
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
    isListExist() {
      return this.searchFilmList.length > 0;
    },
  },

  methods: {
    ...mapActions(["movieSearch"]),

    async onSearch(query) {
      const data = await this.movieSearch(query);
      this.searchFilmList = [...data];
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
.moviesPage {
  // min-height: 100vh;
}

.input__wrapper {
  width: 350px;
}
</style>