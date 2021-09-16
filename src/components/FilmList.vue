<template>
  <div class="list">
    <a-list bordered size="small" :data-source="listOfFilms">
      <a-list-item slot="renderItem" slot-scope="film">
        <router-link :to="{ name: 'movie', params: { id: film.id } }">
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
  list-style: none;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>