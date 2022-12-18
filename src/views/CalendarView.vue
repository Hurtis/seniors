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
            <h2 class="title">Kalendár</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-9">
          <div class="row" v-for="(item, index) in items" :key="index">
            <div class="day-number">{{ index }}</div>
            <calendar-item :article="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import CalendarItem from "@/components/CalendarItem.vue";
export default {
  name: "CalendarView",
  components: {
    CalendarItem,
  },
  data() {
    return {
      user: "senior23",
      server: "https://hurtis.sk/hackathon/mock/calendar.php",
      items: [],
    };
  },
  methods: {
    getCalendar() {
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
    this.getCalendar();
  },
};
</script>
<style scoped>
.day-number {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
}
</style>