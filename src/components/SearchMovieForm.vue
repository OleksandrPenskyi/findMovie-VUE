<template>
  <div class="input__wrapper">
    <a-input-search
      placeholder="input search film"
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
      try {
        this.$router.push({ name: "movies", query: { query } });
        this.query = "";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input__wrapper{
  width: 25%;
}
</style>

//todo Подлкючить валидацию на одинаковый ввод в инпут