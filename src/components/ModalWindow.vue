<template>
  <div class="modal is-active">
    <div class="modal-background" @click="closeImage()"></div>
    <div class="modal-content">
      <p class="image">
        <img :src="img" alt="" />
      </p>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="closeImage()"
    ></button>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "ModalWindow",
  props: ["img"],
  methods: {
    closeImage() {
      this.$emit("closeEvent");
    },
  },
};
</script>
<style scoped>
</style>