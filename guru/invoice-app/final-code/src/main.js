import { createApp } from "vue";

import "./style.css";

import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseStatus from "./components/ui/BaseStatus.vue";

import router from "./routes";

const app = createApp(App);

app.use(router);

app.component("base-button", BaseButton);
app.component("base-status", BaseStatus);

app.mount("#app");
