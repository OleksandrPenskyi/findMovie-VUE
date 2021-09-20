 <template>
  <section class="moviesInfoPage">
    <Container>
      <Header />
      <GoBackBtn />

      <Main>
        <div class="main-wrapper">
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

            <a-button type="button" @click="toggleShowActors"
              >Show Actors</a-button
            >
            <a-button type="button" @click="toggleShowReviews"
              >Show Reviews</a-button
            >
          </div>
        </div>

        <div v-if="isActorsShown" class="main-wrapper centered">
          <ActorsList />
        </div>

        <div v-if="isReviewsShown" class="main-wrapper centered">
          <ReviewsList />
        </div>
      </Main>
    </Container>
  </section>
</template> 

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "../components/Header.vue";
import GoBackBtn from "../components/GoBackBtn.vue";
import Container from "../сontainers/Container.vue";
import Main from "../сontainers/Main.vue";
import ActorsList from "../components/ActorsList/ActorsList.vue";
import ReviewsList from "../components/ReviewsList/ReviewsList.vue";

export default {
  name: "MovieInfo",
  created() {
    const filmId = this.$router.history.current.params.id;
    this.getFullMovieInfo(filmId);
  },
  data() {
    return {
      isActorsShown: false,
      isReviewsShown: false,
    };
  },
  methods: {
    ...mapActions(["getFullMovieInfo"]),
    toggleShowActors() {
      this.isActorsShown = !this.isActorsShown;
      this.isReviewsShown = false;
    },
    toggleShowReviews() {
      this.isReviewsShown = !this.isReviewsShown;
      this.isActorsShown = false;
    },
  },
  computed: {
    ...mapGetters(["movieDescription", "title"]),
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
  },

  components: {
    Header,
    GoBackBtn,
    Container,
    Main,
    ActorsList,
    ReviewsList,
  },
};
</script>

<style lang="scss" scoped>
.moviesInfoPage {
  height: 100vh;
  background: #e0dfda;
}
.main-wrapper {
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;

  width: 74%;
  margin: auto;

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
