<template>
  <main class="main">
    <Container>
      <div class="main-wrapper">
        <slot></slot>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from "../сontainers/Container.vue";

export default {
  name: "Main",

  components: {
    Container,
  },
};
</script>


<style lang="scss" scoped>
.main {
  background: #e0dfda;
}

.main-wrapper {
  padding: 76px 20px 0 20px;

  height: fit-content;
  background: #fff;
}
</style>