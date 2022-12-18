<template>
  <article class="main-card media has-background-white is-shady">
    <figure class="media-left">
      <span class="icon orange-bg">
        <i class="fa fa-2x fa-calendar"></i>
      </span>
    </figure>
    <div class="media-content">
      <div class="content">
        <h1 class="title is-size-5">Kalendár</h1>
        <p class="is-size-6 subtitle">
          <strong>{{ cDay + "." + cMonth + "." + cYear }}</strong
          ><br />Meniny má: {{ nameDay }}
        </p>
      </div>
    </div>
  </article>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "CalendarCard",
  props: ["article"],
  data() {
    return {
      nameApi: "https://api.hurtis.sk/?category=nameday",
      nameDay: "",
      cDay: "",
      cYear: "",
      cMonth: null,
    };
  },
  methods: {
    getNameDay() {
      axios
        .get(this.nameApi)
        .then((response) => {
          this.nameDay = response.data.text;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    let currentDate = new Date();
    this.cDay = currentDate.getDate();
    this.cMonth = currentDate.getMonth() + 1;
    this.cYear = currentDate.getFullYear();
    this.getNameDay();
  },
};
</script>
