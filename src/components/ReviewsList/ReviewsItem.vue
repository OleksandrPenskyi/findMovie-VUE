<template>
  <li class="review__wrapper">
    <p class="userInfo">{{ userName }}</p>
    <div class="content">
      <div class="content__desription">
        <span class="date">{{ createdDate }}</span>
        <StarRating v-if="rating" :rating="rating" />
        <span v-else>No rating</span>
      </div>
      <span>{{ content }}</span>
    </div>
  </li>
</template>

<script>
import moment from "moment";
import StarRating from "./StarRating.vue";

export default {
  name: "ReviewsItem",
  props: {
    avatar: String,
    rating: Number,
    name: String,
    username: String,
    content: String,
    date: String,
  },
  computed: {
    avatarSrc() {
      console.log(`https:image.tmdb.org/t/p/w300${this.avatar}`);
    },
    userName() {
      return this.name || this.username;
    },
    createdDate() {
      return moment(this.date).format("DD.MM.YYYY | HH:mm");
    },
    ratingWidth() {
      return (this.rating / 10) * 100 + "%";
    },
  },
  components: {
    StarRating,
  },
};
</script>

<style lang="scss" scoped>
.review__wrapper {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;

  padding-top: 10px;
  padding-bottom: 10px;

  border-bottom: 1px solid #b5b3ac;
}

.userInfo {
  width: 100%;
  max-width: 200px;

  display: flex;
  flex-direction: column;
  font-weight: 700;
}

.content {
  width: 80%;

  display: flex;
  flex-direction: column;
  text-align: justify;
}

.date {
  margin-right: 20px;
}

.content__desription {
  margin-bottom: 20px;
}
</style>