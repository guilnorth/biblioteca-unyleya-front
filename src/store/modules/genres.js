import GenericModule from "./GenericModule";
import { Genres } from "../types/Types";

const genres = GenericModule("genres", Genres);

const state = {
  ...genres.state
};

const getters = {
  ...genres.getters
};

const mutations = {
  ...genres.mutations
};

const actions = {
  ...genres.actions
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
