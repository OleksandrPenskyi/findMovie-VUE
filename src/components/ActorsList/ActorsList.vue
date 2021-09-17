<template>
  <div class="list">
    <a-list bordered size="small" :data-source="actorsList">
      <a-list-item slot="renderItem" slot-scope="actor" class="list__item">
        <ActorsCard
          :character="actor.character"
          :real_name="actor.name || actor.original_name"
          :pic="actor.profile_path"
        />
      </a-list-item>
    </a-list>
  </div>
</template>


<script>
import ActorsCard from "./ActorsCard.vue";

export default {
  name: "ActorsList",
  props: {
    actorsList: {
      type: Array,
      require: true,
    },
  },
  components: {
    ActorsCard,
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>