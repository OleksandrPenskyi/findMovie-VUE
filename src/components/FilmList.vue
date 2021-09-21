<template>
  <div class="list">
    <a-list bordered size="small" :data-source="listOfFilms">
      <a-list-item slot="renderItem" slot-scope="film" class="list__item">
        <router-link
          class="list__link"
          :to="{ name: 'movieInfo', params: { id: film.id } }"
        >
          {{ film.original_title }}
        </router-link>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: "FilmList",
  props: {
    listOfFilms: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0;
  margin: 0;
}

.list__item {
  padding: 0 !important;

  &:hover {
    background-color: #b5b3ac;
  }

  &:hover .list__link {
    font-weight: 700;
  }
}

.list__link {
  font-size: 18px;

  width: 100%;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  font-weight: 500;
}
</style>

// добавить валидацию, если строка поиска пустая


