<template>
  <header class="header">
    <div class="linkWrapper">
      <router-link to="/" class="link link__home">Home</router-link>
      <router-link to="/movies" class="link">Movies</router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  margin-bottom: 10px;
  // height: 7vh;
  width: 100%;
  background: #b5b3ac;
}

.linkWrapper {
  position: relative;

  padding: 10px;

  width: 100%;
  max-width: 200px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.link {
  color: #fff;
  font-weight: 700;
  font-size: 24px;

  &:hover {
    text-decoration: underline;
  }
}

.link__home {
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: block;
    content: "";
    height: 25px;
    width: 3px;
    background: #fff;
  }
}
</style>
