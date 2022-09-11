import { createApp } from "vue";
import "./global-style.css";
import App from "./App.vue";

import router from "./routes";

import PFCard from "./components/ui/pf-card.vue";
import PFChip from "./components/ui/pf-chip.vue";
import PFButton from "./components/ui/pf-button.vue";
import PFUpvote from "./components/ui/pf-upvote.vue";
import PFDropdown from "./components/ui/pf-dropdown.vue";
import PFGoBack from "./components/ui/pf-goback.vue";
import PFTextarea from "./components/ui/pf-textarea.vue";

const app = createApp(App);

app.component("pf-card", PFCard);
app.component("pf-chip", PFChip);
app.component("pf-button", PFButton);
app.component("pf-upvote", PFUpvote);
app.component("pf-dropdown", PFDropdown);
app.component("pf-goback", PFGoBack);
app.component("pf-textarea", PFTextarea);

app.use(router);

app.mount("#app");
