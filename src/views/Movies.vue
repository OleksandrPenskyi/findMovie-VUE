<template>
  <section class="moviesPage">
    <Container>
      <Header />

      <Main>
        <div class="input__wrapper">
          <a-input-search
            placeholder="input search film"
            enter-button="Search"
            size="large"
            allowClear
            @search="onSearch"
          />
        </div>

        <FilmList v-if="isListExist" :listOfFilms="foundedFilmList" />
      </Main>
    </Container>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Header from "@/components/Header.vue";
import FilmList from "@/components/FilmList.vue";
import Container from "../сontainers/Container.vue";
import Main from "../сontainers/Main.vue";

export default {
  beforeDestroy() {
    this.clearFoundedFilmList();
  },

  name: "Movies",
  components: {
    Header,
    FilmList,
    Container,
    Main,
  },

  computed: {
    ...mapGetters(["foundedFilmList"]),

    isListExist() {
      return this.foundedFilmList.length > 0;
    },
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
  padding-left: 1px;
  padding-right: 10px;
}

.input__wrapper {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 350px;
}
</style>