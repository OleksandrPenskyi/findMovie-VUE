<template>
  <section class="footer">
    <span class="footer__text">Penskyi Oleksandr</span>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  background: #b5b3ac;
  padding: 10px 20px;
}

.footer__text {
  margin: 0;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 250ms ease-in;

  &:hover {
    color: red;
  }
}
</style>