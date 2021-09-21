<template>
  <section class="homePage">
    <Empty />
    <Main>
      <h1>Trend moovie list</h1>

      <FilmList :listOfFilms="trendList" />
    </Main>
    <Empty />
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
.homePage {
  // min-height: 100vh;
}

.empty-container {
  height: 30px;
  width: 100%;
}
</style>
