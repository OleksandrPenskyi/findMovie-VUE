<template>
  <section v-if="isListExist" class="actors-section">
    <ul class="list">
      <ActorsItem v-for="actor in actorsList" :actor="actor" :key="actor.id" />
    </ul>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ActorsItem from "./ActorsItem.vue";
import Container from "../../сontainers/Container.vue";

export default {
  name: "ActorsList",

  async created() {
    try {
      const { id } = this.$route.params;
      const data = await this.getMovieCast(id);
      this.actorsList = [...data];
    } catch (error) {
      console.log(error);
    }
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
    ...mapGetters(["getActorsVisible"]),

    isListExist() {
      return this.actorsList.length > 0 && this.getActorsVisible;
    },
  },

  components: {
    ActorsItem,
    Container,
  },
};
</script>

<style lang="scss" scoped>
.actors-section {
  padding: 20px;
  margin: 0;
}

.list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: -10px;
}
</style>