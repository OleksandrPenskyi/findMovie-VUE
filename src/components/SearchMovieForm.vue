<template>
  <div class="input__wrapper">
    <a-input-search
      placeholder="input search film"
      enter-button="Search"
      size="large"
      allowClear
      v-model="query"
      @search="onSearch"
    />
  </div>
</template>

<script>
export default {
  name: "SearchMovieForm",

  data() {
    return {
      query: "",
    };
  },

  methods: {
    async onSearch(query) {
      this.$router.push({ name: "movies", query: { query } });
      this.query = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

//todo Подлкючить валидацию на одинаковый ввод в инпут