import { createStore } from "vuex";
import feedbackModule from "./modules/feedback";

const store = createStore({
  modules: {
    feedback: feedbackModule,
  },
});

export default store;
