import GenericModule from "./GenericModule";
import { Publisher } from "../types/Types";

const publishers = GenericModule("publishers", Publisher);

const state = {
  ...publishers.state
};

const getters = {
  ...publishers.getters
};

const mutations = {
  ...publishers.mutations
};

const actions = {
  ...publishers.actions
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
