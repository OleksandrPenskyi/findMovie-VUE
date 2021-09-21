<template>
  <section class="review-section">
    <ul v-if="isListExist">
      <ReviewsItem
        v-for="{
          author_details: { avatar_path, rating, name, username },
          id,
          content,
          updated_at,
        } in reviewsList"
        :key="id"
        :avatar="avatar_path"
        :rating="rating"
        :name="name"
        :username="username"
        :content="content"
        :date="updated_at"
      />
    </ul>

    <p v-else class="no-review">There is no review about this film!</p>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import ReviewsItem from "../../components/ReviewsList/ReviewsItem.vue";

export default {
  name: "ReviewsList",

  async created() {
    const data = await this.getMovieReviews(this.filmId);
    this.reviewsList = [...data];
  },

  props: {
    filmId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      reviewsList: [],
    };
  },

  methods: {
    ...mapActions(["getMovieReviews"]),
  },

  computed: {
    ...mapGetters(["movieId"]),

    isListExist() {
      return this.reviewsList.length > 0;
    },
  },

  components: {
    ReviewsItem,
  },
};
</script>

<style lang="scss" scoped>
.review-section {
  padding-top: 20px;
  padding-bottom: 20px;
}
.no-review {
  color: #000;
  font-size: 24px;
  font-weight: 600;
}
</style>
