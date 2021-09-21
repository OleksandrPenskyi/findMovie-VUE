<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "app",

  data() {
    return {};
  },

  components: {
    Header,
  },
};
</script>

<style>
#app {
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #e0dfda;
}

ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
