<template>
  <header class="header">
    <Container>
      <div class="header-wrapper">
        <div class="linkWrapper">
          <router-link
            :to="{ name: 'home' }"
            :class="{ link: true, linkActive: activeHomeLink }"
            >Home</router-link
          >
          <router-link
            :to="{ name: 'movies' }"
            :class="{ link: true, linkActive: activeSeacrhLink }"
            >Search</router-link
          >
        </div>

        <SearchMovieForm v-if="activeSearchForm" />
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "../сontainers/Container.vue";
import SearchMovieForm from "../components/SearchMovieForm.vue";

export default {
  computed: {
    activeHomeLink() {
      if (this.$route.name && this.$route.name === "home") {
        return true;
      }
    },

    activeSeacrhLink() {
      if (this.$route.name && this.$route.name === "movies") {
        return true;
      }
    },

    activeSearchForm() {
      if (this.$route.name && this.$route.name === "movies") {
        return true;
      }
    },
  },

  components: {
    Container,
    SearchMovieForm,
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
}

.header-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  background: #b5b3ac;
}

.linkWrapper {
  position: relative;

  width: 100%;
  max-width: 18%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:after {
    position: absolute;
    top: 50%;
    left: 47%;
    transform: translate(-50%, -50%);

    display: block;
    content: "";
    height: 25px;
    width: 3px;
    background: #fff;
  }
}

.link {
  position: relative;

  padding-top: 20px;
  padding-bottom: 20px;

  color: #fff;
  font-weight: 700;
  font-size: 24px;
  transition: all 200ms ease-in;

  &:hover {
    transform: scale(1.05);
  }
}

.linkActive {
  &:after {
    position: absolute;
    bottom: 0;
    right: 0;

    display: block;
    content: "";
    height: 2px;
    width: 100%;
    background: #fff;
  }
}
</style>
