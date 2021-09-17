<template>
  <div class="list">
    <a-list bordered size="small" :data-source="listOfFilms">
      <a-list-item slot="renderItem" slot-scope="film" class="list__item">
        <router-link
          class="list__link"
          :to="{ name: 'movie', params: { id: film.id } }"
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
  props: ["listOfFilms"],
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0;
  margin: 0;
}

.list__item {
  &:hover {
    background-color: #b5b3ac;
  }

  &:hover .list__link {
    font-weight: 700;
  }
}

.list__link {
  // font-size: 14px;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>

// добавить валидацию, если строка описка пустая