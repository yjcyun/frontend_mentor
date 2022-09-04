import { createStore } from "vuex";

type Job = {
  id: string;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
};

type State = {
  jobs: Job[];
  filteredJobs: Job[];
  loadMoreFrom: number;
  jobsPerPage: number;
};

const store = createStore<State>({
  state() {
    return {
      jobs: [],
      filteredJobs: [],
      loadMoreFrom: 12,
      jobsPerPage: 12,
    };
  },

  getters: {
    allJobs(state) {
      return state.jobs;
    },
    jobById: (state) => (id: string) => {
      return state.jobs.find((job) => job.id === id);
    },
    filteredJobs(state) {
      return state.filteredJobs;
    },
    loadMoreFrom(state) {
      return state.loadMoreFrom;
    },
    jobsPerPage(state) {
      return state.jobsPerPage;
    },
  },

  mutations: {
    setJobs(state, data) {
      state.jobs = data;
    },

    setFilteredJobs(state, { data, count }) {
      state.filteredJobs = data.slice(0, count);
    },

    searchJobs(state, payload) {
      state.filteredJobs = payload;
    },

    loadMore(state) {
      const slicedJobs = state.jobs.slice(
        state.loadMoreFrom,
        state.jobsPerPage + state.loadMoreFrom
      );

      state.filteredJobs = [...state.filteredJobs, ...slicedJobs];

      state.loadMoreFrom = state.loadMoreFrom + state.jobsPerPage;
    },

    resetLoadValues(state) {
      state.loadMoreFrom = 12;
      state.jobsPerPage = 12;
    },
  },

  actions: {
    setJobs(context, data) {
      context.commit("setJobs", data);
    },
    setFilteredJobs(context, data) {
      context.commit("setFilteredJobs", data);
    },
    searchJobs(context, data) {
      context.commit("searchJobs", data);
    },
    loadMoreJobs(context, data) {
      context.commit("loadMore", data);
    },
    resetLoadValues(context) {
      context.commit("resetLoadValues");
    },
  },
});

export default store;
