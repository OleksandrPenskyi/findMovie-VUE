<template>
  <section class="homePage">
    <Header />
    <FilmList :listOfFilms="trendList" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import FilmList from "@/components/FilmList.vue";

export default {
  name: "Home",

  created() {
    this.fetchTrendFilms(); // записываем в стейт список популярных фильмов
  },

  data: () => ({
    title: "asd",
  }),

  computed: mapGetters(["trendList"]),
  methods: mapActions(["fetchTrendFilms"]),

  components: {
    Header,
    FilmList,
  },
};
</script>

<style lang="scss" scoped>
.homePage {
  height: 100vh;
  background: #e0dfda;
}
</style>
