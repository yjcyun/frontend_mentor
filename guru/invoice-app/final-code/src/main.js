import { createApp } from "vue";

import "./style.css";

import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseStatus from "./components/ui/BaseStatus.vue";
import BaseInput from "./components/ui/BaseInput.vue";
import BaseLabel from "./components/ui/BaseLabel.vue";
import BaseSelect from "./components/ui/BaseSelect.vue";

import router from "./routes";

const app = createApp(App);

app.use(router);

app.component("base-button", BaseButton);
app.component("base-status", BaseStatus);
app.component("base-input", BaseInput);
app.component("base-label", BaseLabel);
app.component("base-select", BaseSelect);

app.mount("#app");
