<template>
  <div class="modal is-active">
    <div class="modal-background" @click="closeBox()"></div>
    <div class="modal-content">
      <div class="contact-holder">
        <a
          href="tel:0903903903"
          class="contact"
          v-for="(item, index) in items"
          :key="index"
          :data="item.title"
        >
          {{ item.title }}
        </a>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="closeBox()"
      ></button>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "ModalBox",
  props: ["img"],
  data() {
    return {
      user: "senior23",
      server: "https://seniori-admin.retry.sk/api/contacts",
      items: [],
    };
  },
  methods: {
    closeBox() {
      this.$emit("closeEvent");
    },
    getContacts() {
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
    this.getContacts();
  },
};
</script>
<style scoped>
.contact-holder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.contact {
  text-align: center;
  width: 120px;
  height: 120px;
  padding: 0.5rem;
  margin: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  color: #4a4a4a;
  padding: 1.25rem;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>