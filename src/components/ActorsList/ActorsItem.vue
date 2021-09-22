<template>
  <li class="list-item">
    <div class="img-wrapper">
      <img class="img" :src="photo" alt="real_name" />
    </div>
    <div class="wrapper__descr">
      <p class="text">
        <span class="text__name">{{ name }}</span> <br />
        <span class="text__character">as {{ actor.character }}</span>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: "ActorsItem",
  props: {
    actor: {
      type: Object,
      required: true,
    },
  },
  computed: {
    name() {
      return this.actor.name || this.actor.original_name;
    },

    photo() {
      if (this.actor.profile_path) {
        return `https:image.tmdb.org/t/p/w300${this.actor.profile_path}`;
      } else {
        return "https://uv-technology.ru/images/stories/virtuemart/product/%D0%97%D0%B0%D0%B3%D0%BB%D1%83%D1%88%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D1%82%D0%BE%D0%B2%D0%B0%D1%807.jpg";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  width: calc((100% - 50px) / 6);
  margin-bottom: 10px;

  &:not(:nth-child(6n)) {
    margin-right: 10px;
  }
}

.img-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 290px;
}

.img {
  width: 100%;
  display: block;
  height: auto;
}

.text {
  margin: 0;
  text-align: center;

  &__name {
    margin: 0;
    font-weight: 700;
    text-align: center;
  }

  &__character {
    margin: 0;
    text-align: center;
  }
}

.wrapper__descr {
  height: 100px;
  padding: 10px 5px;
  background: #e0dfda;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
