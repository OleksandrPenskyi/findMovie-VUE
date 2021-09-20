<template>
  <div class="star-rating">
    <span class="star star--outlined" v-for="item in 10" :key="item"></span>
    <div class="star-rating__colored" :style="`width: ${ratingWidth}`">
      <span
        class="star star--colored"
        v-for="item in rating"
        :key="item"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    rating: Number,
  },
  computed: {
    ratingWidth() {
      return (this.rating / 10) * 100 + "%";
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating {
  position: relative;
  display: inline-flex;
  &__colored {
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}

.star {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 3px;
  flex-shrink: 0;
  &--colored {
    background: url("../../assets/stars/outlined.svg") center no-repeat;
    background-size: contain;
  }

  &--outlined {
    background: url("../../assets/stars/star.svg") center no-repeat;
    background-size: contain;
  }
}
</style>