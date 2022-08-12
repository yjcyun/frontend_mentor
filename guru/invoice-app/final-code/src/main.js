import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";

import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

const app = createApp(App);

app.use(router);

app.component("base-button", BaseButton);

app.mount("#app");