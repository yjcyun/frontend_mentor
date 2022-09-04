import { createRouter, createWebHistory } from "vue-router";

import JobsList from "@/views/JobsList.vue";
import JobDetails from "@/views/JobDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: JobsList,
    },
    {
      path: "/:jobId",
      component: JobDetails,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
