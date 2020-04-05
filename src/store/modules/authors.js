import GenericModule from "./GenericModule";
import { Author } from "../types/Types";

const authors = GenericModule("authors", Author);

const state = {
  ...authors.state
};

const getters = {
  ...authors.getters
};

const mutations = {
  ...authors.mutations
};

const actions = {
  ...authors.actions
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
