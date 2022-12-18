import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/bulma.min.css";
import "./assets/css/font-awesome.css";
import "./assets/css/style.css";

createApp(App).use(router).mount("#app");
