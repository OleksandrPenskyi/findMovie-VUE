 <template>
  <div>
    <Header /> <GoBackBtn />
    <h2>
      <span>{{ title }}</span> <span>({{ date }})</span>
    </h2>
    <img :src="poster" alt="title" />

    <h3>{{ tagline }}</h3>

    <p><span>Overview: </span>{{ overview }}</p>

    <div>
      <span>Genres: </span>
      <ul v-for="genre in genres" :key="genre.id">
        <li>{{ genre.name }}</li>
      </ul>
    </div>

    <p><span>Status: </span>{{ status }}</p>

    <p><span>IMDB: </span>{{ rating }}</p>
  </div>
</template> 

<!-- <template>
  <section>
    <Header />
    <GoBackBtn />

    <a-card hoverable style="width: 240px">
      <img
        slot="cover"
        alt="title"
        src="poster"
      />
      <a-card-meta title="Europe Street beat">
        <template slot="description"> <p><span>Status: </span>{{ status }}</p> </template>        
        <template slot="description"> <p><span>IMDB: </span>{{ rating }}</p> </template>
        <template slot="description"> <p><span>Overview: </span>{{ overview }}</p> </template>
        <template slot="description"> {{ tagline }} </template>
        <template slot="description"> www.instagram.com </template>
        <template slot="description"> www.instagram.com </template>
      </a-card-meta>
    </a-card>
  </section>
</template> -->




<script>
import { mapActions, mapGetters } from "vuex";
import Header from "../components/Header.vue";
import GoBackBtn from "../components/GoBackBtn.vue";
export default {
  created() {
    const filmId = this.$router.history.current.params.id;
    this.getFullMovieInfo(filmId);
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
        return this.movieDescription.genres || "No info";
      }
    },

    overview() {
      if (this.movieDescription) {
        return this.movieDescription.overview || "No info";
      }
    },
  },

  methods: mapActions(["getFullMovieInfo"]),
  components: {
    Header,
    GoBackBtn,
  },
};
</script>

