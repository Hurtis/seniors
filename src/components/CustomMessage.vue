<template>
  <div class="box cta">
    <div class="container">
      <p class="has-text-centered has-text-weight-medium">
        <marquee>
          {{ message }}
        </marquee>
      </p>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "CustomMessage",
  props: ["message"],
};
</script>