<template>
  <main class="main">
    <Container>
      <div :class="{ mainWrapper: true, fitContent: getVisibleTabs }">
        <slot></slot>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from "../сontainers/Container.vue";

export default {
  name: "Main",

  data: () => ({
    visible: false,
  }),

  watch: {
    $route(to, from) {
      if (
        (to !== from && to.name === "actors") ||
        (to !== from && to.name === "reviews")
      ) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    },
  },

  computed: {
    getVisibleTabs() {
      return this.visible;
    },
  },

  components: {
    Container,
  },
};
</script>


<style lang="scss" scoped>
.main {
  background: #e0dfda;
}

.mainWrapper {
  padding: 96px 20px 0 20px;

  height: 100vh;
  background: #fff;
}

.fitContent {
  height: auto;
}
</style>