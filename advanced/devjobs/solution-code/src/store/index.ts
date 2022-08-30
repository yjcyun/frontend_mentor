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
  filter: Job[];
};

const store = createStore<State>({
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
    getJobById: (state) => (id: string) => {
      return state.jobs.find((job) => job.id === id);
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
