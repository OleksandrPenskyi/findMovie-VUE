<template>
  <section class="homePage">
    <Main>
      <section class="homePage__wrapper">
        <h1>Trend moovie list</h1>

        <FilmList :listOfFilms="trendList" />
      </section>
    </Main>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import FilmList from "@/components/FilmList.vue";
import Main from "../сontainers/Main.vue";
import Empty from "@/components/Empty.vue";

export default {
  name: "Home",

  async created() {
    const data = await this.fetchTrendFilms();
    this.trendList = [...data];
  },

  data: () => ({
    trendList: [],
  }),

  methods: mapActions(["fetchTrendFilms"]),

  components: {
    FilmList,
    Main,
    Empty,
  },
};
</script>

<style lang="scss" scoped>
.homePage__wrapper {
  padding: 20px;
}

.empty-container {
  height: 30px;
  width: 100%;
}
</style>
