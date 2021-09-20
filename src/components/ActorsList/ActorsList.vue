<template>
  <section class="actors-section">
    <ul class="list">
      <ActorsItem v-for="actor in actorsList" :actor="actor" :key="actor.id" />
    </ul>
  </section>
</template>


<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import ActorsItem from "./ActorsItem.vue";
import Container from "../../сontainers/Container.vue";

export default {
  name: "ActorsList",

  async created() {
    const data = await this.getMovieCast();
    this.actorsList = [...data];
  },

  data() {
    return {
      actorsList: [],
    };
  },

  methods: {
    ...mapActions(["getMovieCast"]),
  },

  computed: {
    ...mapGetters(["movieId"]),
  },

  components: {
    ActorsItem,
    Container,
  },
};
</script>

<style lang="scss" scoped>
.actors-section {
  padding-top: 20px;
  padding-bottom: 20px;

  border-bottom: 1px solid #b5b3ac;
}

.list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>