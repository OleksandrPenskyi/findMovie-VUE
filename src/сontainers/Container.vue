<template>
  <section class="container">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  width: 100%;
  width: 1280px;
  margin-left: auto;
  margin-right: auto;

  background: #fff;
}
</style>
