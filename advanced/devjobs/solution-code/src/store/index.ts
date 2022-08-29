import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      jobs: [],
      filter: [],
    };
  },
  getters: {
    getJobs(state) {
      return state.jobs;
    },
  },
  mutations: {
    setJobs(state, data) {
      state.jobs = data;
    },
  },
  actions: {
    setJobs(context, data) {
      context.commit("setJobs", data);
    },
  },
});

export default store;
