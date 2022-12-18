<template>
  <article class="post">
    <a :href="article.link" target="_blank" class="post-link">
      <h4 class="title-4">{{ article.title }}</h4>
    </a>
    <p v-html="article.description"></p>
  </article>
</template>
<script>
/* eslint-disable */
export default {
  name: "WebItem",
  props: ["article", "feed"],
};
</script>
<style scoped>
article.post {
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6eaee;
}
a.post-link {
  text-decoration: none;
}

.post h4 {
  margin-top: 0.5rem;
  color: #363636;
  text-decoration: none;
  font-weight: bold;
}
</style>