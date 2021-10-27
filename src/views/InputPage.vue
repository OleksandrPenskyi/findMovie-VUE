<template>
  <section class="homePage">
    <Main>
      <br /><br /><br /><br /><br /><br /><br />

      <a-input
        id="input"
        type="text"
        v-model="someLogin"
        allowClear
        @change="someMethod"
      />
      <a-input type="password" v-model="somePassword" allowClear />
      <a-input
        id="inputNormal"
        type="number"
        v-model="someNumber"
        allowClear
        @change="someMethodTwo"
      />

      <br /><br /><br /><br /><br /><br /><br />

      <p>Custominput:{{ autofilled }}</p>
      <p>normalInput:{{ normal }}</p>
    </Main>
  </section>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      someLogin: "",
      somePassword: "",
      someNumber: "",
      autofilled: "",
      normal: "",
    };
  },
  methods: {
    someMethod() {
      const inputBackgroundNormalState = "rgb(255, 255, 255)";
      let style = window.getComputedStyle(document.getElementById("input"));
      if (style.backgroundColor !== inputBackgroundNormalState) {
        this.autofilled = true;
      }
    },

    someMethodTwo() {
      const inputBackgroundNormalState = "rgb(255, 255, 255)";
      let style = window.getComputedStyle(
        document.getElementById("inputNormal")
      );
      this.normal =
        style.backgroundColor !== inputBackgroundNormalState ? true : false;
    },
  },
};
</script>

