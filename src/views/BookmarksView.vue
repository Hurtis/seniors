<template>
  <section class="section">
    <div class="container mb-5">
      <div class="columns">
        <div class="column is-half">
          <div class="block">
            <router-link to="/" class="button is-info"> späť </router-link>
          </div>
        </div>
        <div class="column is-half">
          <div class="page-title">
            <h2 class="title">Obľúbené stránky</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="is-clearfix">
        <div class="columns is-flex-wrap-wrap">
          <bookmark-item
            v-for="(item, index) in items"
            :key="index"
            :article="item"
          >
          </bookmark-item>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import BookmarkItem from "@/components/BookmarkItem.vue";
export default {
  name: "BookmarksView",
  components: {
    BookmarkItem,
  },
  data() {
    return {
      user: "senior23",
      server: "https://seniori-admin.retry.sk/api/pages",
      items: [],
    };
  },
  methods: {
    getNews() {
      axios
        .get(this.server, {
          user: this.user,
        })
        .then((response) => {
          this.items = response.data;
          this.message = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>
<style scoped>
</style>