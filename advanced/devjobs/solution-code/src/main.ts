import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";
import router from "./routes";
import store from "./store";

import BaseButton from "./components/ui/BaseButton.vue";

const app = createApp(App);
app.component("BaseButton", BaseButton);

app.use(router);
app.use(store);

app.mount("#app");
