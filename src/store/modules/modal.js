import Router from "../../router";
export default {
  namespaced: true,
  state: {
    isOpen: false
  },
  mutations: {
    setStateModal: (state, value) => {
      state.isOpen = value;
    }
  },
  actions: {
    openModal: ({ commit }) => {
      commit("setStateModal", true);
    },
    closeModal: ({ commit }) => {
      const { endpoint } = Router.currentRoute.params;
      Router.replace(`/${endpoint}`);
      commit("setStateModal", false);
    }
  }
};
