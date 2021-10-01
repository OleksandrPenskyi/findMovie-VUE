<template>
  <div class="input__wrapper">
    <!-- <a-input-search
      placeholder="input search film"
      size="large"
      allowClear
      v-model="query"
      @search="onSearch"
    /> -->

    <!-- v-model="$v.query.$model" - ссылка на query, которая прошла через модель валидации.   -->
    <a-input-search
      class="customInput"
      placeholder="input search film"
      size="large"
      allowClear
      v-model="$v.query.$model"
      @search="onSearch"
    />
    <small v-if="$v.query.$dirty && !$v.query.minLength" class="error-message"
      >Fill in the correct name</small
    >
    <small v-if="$v.query.$dirty && !$v.query.required" class="error-message"
      >This field is required</small
    >
  </div>
</template>

<script>
import { minLength, required } from "vuelidate/lib/validators";

export default {
  name: "SearchMovieForm",

  data() {
    return {
      query: "",
    };
  },

  methods: {
    async onSearch(query) {
      if (this.$v.$invalid) {
        console.log("validation error");
        return;
      }

      try {
        this.$router.push({ name: "movies", query: { query } });
        this.query = "";
        this.$v.query.$reset();
      } catch (error) {
        console.log(error);
      }
    },

    //* схема для валидации формы. Чтобы начало валидировать после того, как нажал сабмит
    // async onSearch(query) {
    //   if (this.$v.$invalid) {
    //     this.$v.$touch(); // включает валидацию, если клацаем с пустым инпутом
    //     return;
    //   }

    //   try {
    //     this.$router.push({ name: "movies", query: { query } });
    //     this.query = "";
    //     this.$v.query.$reset(); // отключает валидацию после успешного поиска
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },

  validations: {
    query: {
      required,
      minLength: minLength(2),
    },
  },
};
</script>

<style lang="scss" scoped>
.input__wrapper {
  position: relative;
  width: 25%;
}

.error-message {
  position: absolute;
  left: 0;
  bottom: -17px;
  color: red;
}

/deep/ .ant-input-search-icon {
  // background: red;
}
</style>