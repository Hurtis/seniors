<template>
  <div>
    <div class="hero-body has-background-info">
      <div class="container has-text-centered">
        <h1 class="title">Vitajte vo svojom Senior paneli</h1>
      </div>
    </div>
    <custom-message v-show="message != null" :message="message" />
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <main-card
            v-for="(card, index) in cards"
            :key="index"
            :cardType="card.type"
            :card="card"
            @openEvent="myModal = true"
          >
          </main-card>
        </div>
      </div>
    </section>
    <modal-box v-if="myModal" @closeEvent="myModal = false"></modal-box>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import axios from "axios";
import CustomMessage from "@/components/CustomMessage.vue";
import MainCard from "@/components/MainCard.vue";
import ModalBox from "@/components/ModalBox.vue";
export default {
  name: "HomeView",
  components: {
    CustomMessage,
    MainCard,
    ModalBox,
  },
  data() {
    return {
      myModal: false,
      message: "",
      user: "senior23",
      chckTime: 5000,
      server: "https://seniori-admin.retry.sk/api/icons",
      cards: [],
    };
  },
  mounted() {
    this.getCards();
    this.checkCards();
  },
  methods: {
    checkCards() {
      setInterval(() => {
        this.getCards();
      }, this.chckTime);
    },
    getCards() {
      axios
        .get(this.server, {
          user: this.user,
        })
        .then((response) => {
          this.cards = response.data.cards;
          this.message = response.data.message;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
