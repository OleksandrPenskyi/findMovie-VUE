<template>
  <Main>
    <section class="moviesPage">
      <Header />
      <div class="input__wrapper">
        <a-input-search
          placeholder="input search film"
          enter-button="Search"
          size="large"
          allowClear
          @search="onSearch"
        />
      </div>

      <template>
        <FilmList :listOfFilms="foundedFilmList" />
      </template></section
  ></Main>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Header from "@/components/Header.vue";
import FilmList from "@/components/FilmList.vue";
import Main from "@/components/Main.vue";

export default {
  beforeDestroy() {
    this.clearFoundedFilmList();

    // console.log(this.$store); // доступ к глобальной переменной сторе
  },

  name: "Movies",
  components: {
    Header,
    FilmList,
    Main,
  },

  computed: {
    ...mapGetters(["foundedFilmList"]),
  },

  methods: {
    ...mapActions(["movieSearch"]),
    ...mapMutations(["clearFoundedFilmList"]),
    onSearch(value) {
      this.movieSearch(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.moviesPage {
  height: 100vh;
  background: #e0dfda;
}

.input__wrapper {
  margin-top: 10px;
  width: 350px;
}
</style>