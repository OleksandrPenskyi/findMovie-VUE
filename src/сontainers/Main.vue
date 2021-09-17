<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "Main",
};
</script>


<style lang="scss" scoped>
.main{
    padding-left: 10px;
    padding-right: 10px;
}
</style>