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
            <h2 class="title">Správy</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-9">
          <div class="tabs">
            <ul>
              <li
                :class="[activeFeed === 'sme' ? 'is-active' : '']"
                @click="changeSource('sme')"
              >
                <a>Sme</a>
              </li>
              <li
                :class="[activeFeed === 'aktuality' ? 'is-active' : '']"
                @click="changeSource('aktuality')"
              >
                <a>Aktuality</a>
              </li>
              <li
                :class="[activeFeed === 'pravda' ? 'is-active' : '']"
                @click="changeSource('pravda')"
              >
                <a>Pravda</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="columns is-centered">
        <div class="column is-9">
          <div class="box">
            <web-item
              v-for="(item, index) in calculatedContent"
              :key="index"
              :article="item"
              :feed="feeds"
            >
            </web-item
            ><br />
            <nav
              class="pagination"
              role="navigation"
              aria-label="pagination"
              v-show="paginator"
            >
              <ul class="pagination-list">
                <li v-for="item in totalPages" :key="item">
                  <a
                    class="pagination-link"
                    :class="[activePage === item ? 'is-current' : '']"
                    @click="newPage(item)"
                    >{{ item }}</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import WebItem from "@/components/WebItem.vue";
export default {
  name: "NewsView",
  components: {
    WebItem,
  },
  data() {
    return {
      activeFeed: "sme",
      feeds: {
        sme: "https://hurtis.sk/rss/",
        aktuality: "https://hurtis.sk/rss/aktuality.php",
        pravda: "https://hurtis.sk/rss/pravda.php",
      },
      news: [],
      articlesPerPage: 5,
      activePage: 1,
      totalPages: null,
      calculatedContent: null,
      paginator: true,
    };
  },
  methods: {
    changeSource(source) {
      this.activePage = 1;
      this.activeFeed = source;
      this.getNews(this.feeds[source]);
    },
    newPage(myPage) {
      this.activePage = myPage;
      this.calculatedContent = this.pagination(
        this.news,
        myPage,
        this.articlesPerPage
      );
    },
    pagination(myObject, page, rowsPerPage) {
      let content = myObject.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
      );
      return content;
    },
    getNews(url) {
      axios
        .get(url)
        .then((response) => {
          this.news = response.data.items;
          this.totalPages = Math.ceil(this.news.length / this.articlesPerPage);
          this.calculatedContent = this.pagination(
            this.news,
            this.activePage,
            this.articlesPerPage
          );
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.getNews(this.feeds[this.activeFeed]);
  },
};
</script>

