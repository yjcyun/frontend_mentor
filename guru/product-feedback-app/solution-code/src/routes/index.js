import { createRouter, createWebHistory } from "vue-router";

import FeedbackSuggestions from "@/pages/page-suggestions.vue";
import FeedbackRoadmap from "@/pages/page-roadmap.vue";
import FeedbackDetails from "@/pages/page-details.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: FeedbackSuggestions,
    },
    {
      path: "/:feedbackId",
      component: FeedbackDetails,
    },
    {
      path: "/roadmap",
      component: FeedbackRoadmap,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
