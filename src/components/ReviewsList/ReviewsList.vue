<template>
  <div>
    <section v-if="isListExist" class="review-section">
      <ul v-if="isListHasLength" class="list">
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ReviewsItem from "../../components/ReviewsList/ReviewsItem.vue";

export default {
  name: "ReviewsList",

  async created() {
    const { id } = this.$route.params;
    const data = await this.getMovieReviews(id);
    this.reviewsList = [...data];
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
    ...mapGetters(["getReviewsVisible"]),

    isListHasLength() {
      return this.reviewsList.length > 0;
    },

    isListExist() {
      return this.getReviewsVisible;
    },
  },

  components: {
    ReviewsItem,
  },
};
</script>

<style lang="scss" scoped>
.review-section {
  text-align: center;
  padding: 20px;
}
.no-review {
  margin: 0;
  color: #000;
  font-size: 24px;
  font-weight: 600;
}
</style>
