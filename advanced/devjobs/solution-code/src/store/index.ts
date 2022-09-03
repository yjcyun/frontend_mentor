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
    getJobs(state) {
      return state.jobs;
    },
    getJobById: (state) => (id: string) => {
      return state.jobs.find((job) => job.id === id);
    },
    getFilteredJobs(state) {
      return state.filteredJobs;
    },
    getLoadMoreForm(state) {
      return state.loadMoreFrom;
    },
    getJobsPerPage(state) {
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

    filterJobs(state, filters) {
      const title = filters.title.toLowerCase();
      const location = filters.location.toLowerCase();
      const isFullTime = filters.isFullTime;

      const filteredByTitle = state.jobs.filter((job) => {
        return job.position.toLowerCase().includes(title);
      });

      const filteredByLocation = filteredByTitle.filter((job) =>
        job.location.toLowerCase().includes(location)
      );

      const filteredByContract = isFullTime
        ? filteredByLocation.filter((job) => job.contract === "Full Time")
        : filteredByLocation;

      state.filteredJobs = filteredByContract;
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
    filterJobs(context, data) {
      context.commit("filterJobs", data);
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
