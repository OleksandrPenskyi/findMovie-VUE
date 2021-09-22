 <template>
  <!-- <GoBackBtn /> -->

  <Main>
    <section class="movieInfo-wrapper">
      <img class="poster" :src="poster" alt="title" />

      <div class="description">
        <h2 class="title">
          <span>{{ title }} </span>
          <span>({{ date }})</span>
        </h2>
        <h3 v-show="tagline" class="tagline">"{{ tagline }}"</h3>
        <p class="title-desr">
          <span class="title-name">Overview: </span>{{ overview }}
        </p>
        <p class="title-desr">
          <span class="title-name">Genres: </span>{{ genres }}
        </p>
        <p class="title-desr">
          <span class="title-name">Status: </span>{{ status }}
        </p>
        <p class="title-desr">
          <span class="title-name">IMDB: </span>{{ rating }}
        </p>

        <a-button type="button" @click="toggleShowActors">
          <router-link :to="{ name: 'actors' }">Show Actors</router-link>
        </a-button>

        <a-button type="button" @click="toggleShowReviews">
          <router-link :to="{ name: 'reviews' }">Show Reviews</router-link>
        </a-button>
      </div>
    </section>

    <router-view></router-view>
  </Main>
</template> 

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import GoBackBtn from "../components/GoBackBtn.vue";
import Main from "../сontainers/Main.vue";
import ActorsList from "../components/ActorsList/ActorsList.vue";
import ReviewsList from "../components/ReviewsList/ReviewsList.vue";

export default {
  name: "MovieInfo",
  async created() {
    const id = this.$router.history.current.params.id;
    const data = await this.getFullMovieInfo(id);
    this.movieDescription = data;
  },
  data() {
    return {
      movieDescription: null,
    };
  },
  methods: {
    ...mapActions(["getFullMovieInfo"]),
    ...mapMutations(["showActors", "showReviews"]),

    toggleShowActors() {
      this.showActors();
    },
    toggleShowReviews() {
      this.showReviews();
    },
  },
  computed: {
    ...mapGetters(["title"]),
    title() {
      if (this.movieDescription) {
        return (
          this.movieDescription.original_title ||
          this.movieDescription.title ||
          "No title"
        );
      }
    },
    date() {
      if (this.movieDescription) {
        return this.movieDescription.release_date.slice(0, 4);
      }
    },
    tagline() {
      if (this.movieDescription) {
        return this.movieDescription.tagline;
      }
    },
    poster() {
      if (this.movieDescription) {
        return `https:image.tmdb.org/t/p/w500${
          this.movieDescription.poster_path ||
          this.movieDescription.backdrop_path
        }`;
      }
    },
    rating() {
      if (this.movieDescription) {
        return this.movieDescription.vote_average || "No info";
      }
    },
    status() {
      if (this.movieDescription) {
        return this.movieDescription.status || "No info";
      }
    },
    genres() {
      if (this.movieDescription) {
        return (
          this.movieDescription.genres.map((film) => film.name).join(", ") ||
          "No info"
        );
      }
    },
    overview() {
      if (this.movieDescription) {
        return this.movieDescription.overview || "No info";
      }
    },

    filmId() {
      if (this.movieDescription) {
        return this.movieDescription.id;
      }
    },
  },
  components: {
    GoBackBtn,
    Main,
    ActorsList,
    ReviewsList,
  },
};
</script>

<style lang="scss" scoped>
.movieInfo-wrapper {
  padding: 20px;

  display: flex;

  border-bottom: 2px solid #b5b3ac;
}

.title-name {
  margin-right: 5px;
  font-weight: 700;
  color: #000;
  font-size: 16px;
}

.poster {
  width: 350px;
  margin-right: 35px;
}

.tagline {
  margin-bottom: 10px;

  font-style: italic;
}

.title {
  color: #000;
  font-size: 28px;
  font-weight: 700;
}

.title-desr {
  margin-bottom: 10px;

  font-size: 16px;
  text-align: justify;
}

.centered {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
</style>
