<template>
  <a-card style="width: 200px" class="list__item">
    <img slot="cover" alt="real_name" :src="photo" />
    <a-card-meta :title="real_name">
      <template slot="description"> as {{ character }} </template>
    </a-card-meta>
  </a-card>
</template>

<script>
export default {
  name: "ActorsCard",
  props: {
    character: {
      type: String,
      require: true,
    },
    real_name: {
      type: String,
      require: true,
    },

    pic: {
      type: String,
    },
  },
  computed: {
    photo() {
      if (this.pic) {
        return `https:image.tmdb.org/t/p/w300${this.pic}`;
      } else {
        return "https://uv-technology.ru/images/stories/virtuemart/product/%D0%97%D0%B0%D0%B3%D0%BB%D1%83%D1%88%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D1%82%D0%BE%D0%B2%D0%B0%D1%807.jpg";
      }
    },
  },
};
</script>

<style>
.list__item {
  display: inline-block;
}
</style>


