<template>
  <section class="main">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style lang="scss" scoped>
.main {
  background: red;
}
</style>
