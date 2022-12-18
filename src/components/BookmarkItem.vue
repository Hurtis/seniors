<template>
  <div class="column is-half">
    <a :href="article.url" target="_blank" class="card-link">
      <div class="bookmark">
        <span class="image"> <img :src="article.img" alt="aricle" /></span>
        <span class="text">{{ article.title }}</span>
      </div>
    </a>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "BookmarkItem",
  props: ["article"],
};
</script>
<style scoped>
.bookmark {
  padding: 1rem;
  color: hsl(0, 0%, 21%);
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.bookmark .image img {
  width: 40px;
  height: 40px;
}
.bookmark .text {
  padding-left: 1rem;
  font-weight: bold;
}

.bookmark:hover {
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
}
</style>