<template>
  <!-- <HelloWorld /> -->
  <div class="nav">
    <NavbarComponent />
  </div>
  <div>
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
  },
};
</script>

<style scoped>
</style>
