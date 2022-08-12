import { createRouter, createWebHistory } from "vue-router";

import InvoiceDetails from "./views/InvoiceDetails.vue";
import InvoicesPage from "./views/InvoicesPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: InvoicesPage },
    { path: "/:invoiceId", component: InvoiceDetails },
  ],
});

export default router;
