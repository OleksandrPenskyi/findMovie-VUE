<template>
  <section class="homePage">
    <Container>
      <Header />

      <Main>
        <h1>Trend moovie list</h1>
        <FilmList :listOfFilms="trendList" />
      </Main>
    </Container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import FilmList from "@/components/FilmList.vue";
import Container from "../сontainers/Container.vue";
import Main from "../сontainers/Main.vue";

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
    Container,
    Main,
  },
};
</script>

<style lang="scss" scoped>
.homePage {
  height: 100vh;
  background: #e0dfda;
}
</style>
