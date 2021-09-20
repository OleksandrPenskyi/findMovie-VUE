<template>
  <section class="review-section">
    <ul>
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
  </section>
</template>

   

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import ReviewsItem from "../../components/ReviewsList/ReviewsItem.vue";

export default {
  name: "ReviewsList",

  async created() {
    const data = await this.getMovieReviews();
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
    ...mapGetters(["movieId"]),
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
</style>
