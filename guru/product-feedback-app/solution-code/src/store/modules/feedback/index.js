import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import data from "@/data.json";

const feedbackModule = {
  namespaced: true,
  state: {
    feedbacks: data.productRequests,
    categories: ["ui", "ux", "enhancement", "bug", "feature"],
  },
  mutations,
  actions,
  getters,
};

export default feedbackModule;
