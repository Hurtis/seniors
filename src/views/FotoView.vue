<template>
  <section class="section">
    <div class="container mb-5">
      <div class="columns">
        <div class="column is-half">
          <router-link to="/" class="button is-info"> späť </router-link>
        </div>
        <div class="column is-half">
          <div class="page-title">
            <h2 class="title">Fotky</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-flex-wrap-wrap">
        <div
          class="column is-one-third"
          v-for="(foto, index) in fotos"
          :key="index"
        >
          <div
            @click="showImage(foto)"
            class="foto-box"
            :style="{ backgroundImage: `url(${foto})` }"
          ></div>
        </div>
      </div>
    </div>
    <modal-window v-if="window" :img="bigImg" @closeEvent="window = false" />
  </section>
</template>
<script>
/* eslint-disable */
import ModalWindow from "@/components/ModalWindow.vue";
export default {
  name: "FotoView",
  components: {
    ModalWindow,
  },
  data() {
    return {
      bigImg: "",
      window: false,
      fotos: [
        "https://hurtis.sk/hackathon/img/01.jpg",
        "https://hurtis.sk/hackathon/img/02.jpg",
        "https://hurtis.sk/hackathon/img/03.jpg",
        "https://hurtis.sk/hackathon/img/04.jpg",
        "https://hurtis.sk/hackathon/img/05.jpg",
        "https://hurtis.sk/hackathon/img/06.jpg",
      ],
    };
  },
  methods: {
    showImage(url) {
      console.log(url);
      this.bigImg = url;
      this.window = true;
    },
  },
};
</script>
<style scoped>
.foto-box {
  width: 300px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;
}
.foto-box:hover {
  box-shadow: 0 5px 15px -8px rgb(0 0 0 / 24%), 0 8px 10px -5px rgb(0 0 0 / 20%);
}
</style>