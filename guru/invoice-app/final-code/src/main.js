import { createApp } from "vue";

import "./style.css";

import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseStatus from "./components/ui/BaseStatus.vue";
import FormInput from "./components/ui/FormInput.vue";
import FormLabel from "./components/ui/FormLabel.vue";
import FormSelect from "./components/ui/FormSelect.vue";
import FormControl from "./components/ui/FormControl.vue";
import TheModal from "./components/ui/TheModal.vue";

import router from "./routes";
import { store } from "./store";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-button", BaseButton);
app.component("base-status", BaseStatus);
app.component("FormInput", FormInput);
app.component("FormLabel", FormLabel);
app.component("FormSelect", FormSelect);
app.component("FormControl", FormControl);
app.component("TheModal", TheModal);

app.mount("#app");
