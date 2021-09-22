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
  padding-left: 10px;
  padding-right: 10px;

  background: #e0dfda;
}

.main-wrapper{
  background: #fff;
}
</style>