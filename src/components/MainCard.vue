<template>
  <div class="column is-one-third">
    <a v-if="cardType === 'weather'" href="https://shmu.sk" target="_blank">
      <article class="main-card media has-background-white is-shady">
        <figure class="media-left">
          <span class="main-icon" :class="card.color">
            <i class="fa fa-2x fa-thermometer-half"></i>
          </span>
        </figure>
        <div class="media-content">
          <div class="content">
            <h1 class="title is-size-5">{{ card.title }}</h1>
            <p class="is-size-6 subtitle"><strong>-1°C</strong> Oblačno</p>
          </div>
        </div>
      </article>
    </a>
    <!-- claendar -->
    <router-link
      v-else-if="cardType === 'calendar'"
      :to="url"
      class="card-link"
    >
      <calendar-card></calendar-card>
    </router-link>
    <!-- contacts -->
    <div v-else-if="cardType === 'contact'" @click="openBox()">
      <article class="main-card media has-background-white is-shady">
        <figure class="media-left">
          <span class="main-icon" :class="card.color">
            <i class="fa fa-2x fa-phone"></i>
          </span>
        </figure>
        <div class="media-content">
          <div class="content">
            <h1 class="title is-size-5">{{ card.title }}</h1>
            <p class="is-size-6 subtitle">{{ card.description }}</p>
          </div>
        </div>
      </article>
    </div>
    <!-- others -->
    <router-link :to="url" class="card-link" :test="card.title" v-else>
      <article class="main-card media has-background-white is-shady">
        <figure class="media-left">
          <span class="main-icon" :class="card.color">
            <i class="fa fa-2x" :class="ico"></i>
          </span>
        </figure>
        <div class="media-content">
          <div class="content">
            <h1 class="title is-size-5">{{ card.title }}</h1>
            <p class="is-size-6 subtitle">{{ card.description }}</p>
          </div>
        </div>
      </article>
    </router-link>
  </div>
</template>
<script>
/* eslint-disable */
import CalendarCard from "@/components/CalendarCard.vue";
export default {
  name: "MainCard",
  components: {
    CalendarCard,
  },
  props: ["cardType", "card"],
  data() {
    return {
      url: "",
      title: "",
      desc: "",
      src: "",
      topics: [
        {
          news: {
            title: "Správy",
            desc: "Prrhľad aktuálnych správ",
            ico: "fa-newspaper-o",
            url: "/news",
          },
          weather: {
            title: "Počasie",
            desc: "",
            ico: "fa-thermometer",
            url: "https://shmu.sk",
          },
          foto: {
            title: "Fotky",
            desc: "Vaše obľúbené fotografie",
            ico: "fa-camera-retro",
            url: "/foto",
          },
          calendar: {
            title: "Kalendár",
            desc: "",
            ico: "fa-calendar",
            url: "/calendar",
          },
          bookmarks: {
            title: "Záložky",
            desc: "Často navštevované stránky",
            ico: "fa-bookmark",
            url: "/bookmarks",
          },
          contact: {
            title: "Kontakty",
            desc: "Vaše dôležité kontakty",
            ico: "fa-phone",
            url: "/bookmarks",
          },
        },
      ],
    };
  },
  methods: {
    openBox() {
      this.$emit("openEvent");
    },
  },
  mounted() {
    this.url = this.topics[0][this.cardType].url;
    this.desc = this.topics[0][this.cardType].desc;
    this.ico = this.topics[0][this.cardType].ico;
  },
};
</script>
<style scoped>
</style>
