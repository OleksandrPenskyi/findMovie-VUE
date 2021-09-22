<template>
  <section class="error-page">
    <Main>
      <div class="error-page__wrapper">
        <img class="error-page__icon" src="../assets/404.svg" alt="" />

        <div class="error-page__description">
          <p class="error-page__error-text">Error!</p>
          <p class="error-page__main-text">Sorry, can't find page!</p>
        </div>
      </div>
    </Main>
  </section>
</template>

<script>
import Main from "../сontainers/Main.vue";

export default {
  name: "Error",
  components: {
    Main,
  },
};
</script>

<style lang="scss" scoped>
.error-page {


  font-size: 28px;
  font-weight: 700;
  color: #ff6208;
  font-style: italic;

  &__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 100%;
  }

  &__icon {
    width: 200px;
  }

  &__error-text {
    margin: 0;
  }

  &__main-text {
    margin: 0;
  }

  &__description {
    margin-left: 50px;
  }
}
</style>