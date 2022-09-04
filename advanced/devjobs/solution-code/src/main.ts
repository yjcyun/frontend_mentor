import { createApp } from "vue";
import "./style.css";

import App from "@/App.vue";
import router from "./routes";
import store from "./store";

import BaseButton from "@/components/ui/BaseButton.vue";
import JobMeta from "@/components/ui/JobMeta.vue";
import JobLocation from "@/components/ui/JobLocation.vue";

const app = createApp(App);

app.component("BaseButton", BaseButton);
app.component("JobMeta", JobMeta);
app.component("JobLocation", JobLocation);

app.use(router);
app.use(store);

app.mount("#app");
