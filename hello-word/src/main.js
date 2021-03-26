import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import Vue from 'vue'
import store from '@/store'

// createApp(App).mount("#app");
const app = createApp(App);

app.use(store)

app.use(router);

app.mount("#app");
