<template>
  <div>
    <top-bar />
    <router-view />
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
export default {
  name: "App",
  components: {
    TopBar,
  },
};
</script>
