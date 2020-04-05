import GenericModule from "./GenericModule";
import { Book } from "../types/Types";

const books = GenericModule("books", Book);

const state = {
  ...books.state
};

const getters = {
  ...books.getters
};

const mutations = {
  ...books.mutations
};

const actions = {
  ...books.actions
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
