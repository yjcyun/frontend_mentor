import { createApp } from "vue";
import "./global-style.css";
import App from "./App.vue";

import PFCard from "./components/ui/pf-card.vue";
import PFChip from "./components/ui/pf-chip.vue";
import PFButton from "./components/ui/pf-button.vue";
import PFUpvote from "./components/ui/pf-upvote.vue";
import PFDropdown from "./components/ui/pf-dropdown.vue";

const app = createApp(App);

app.component("pf-card", PFCard);
app.component("pf-chip", PFChip);
app.component("pf-button", PFButton);
app.component("pf-upvote", PFUpvote);
app.component("pf-dropdown", PFDropdown);

app.mount("#app");
