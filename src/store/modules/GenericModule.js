import BaseService from "../services/BaseService";
export default function(resource, objectModel) {
  return {
    namespaced: true,
    state: {
      detail: { ...objectModel },
      list: [],
      loadingOnList: false,
      loadingOnDetail: false,
      loadingOnSave: false,
      notification: { type: null, message: null, show: false }
    },
    getters: {},
    mutations: {
      setList: (state, list) => {
        state.list = list;
      },
      setDetail: (state, item) => {
        state.detail = item;
      },
      setLoadingList(state, loading) {
        state.loadingOnList = loading;
      },
      setLoadingDetail(state, loading) {
        state.loadingOnDetail = loading;
      },
      setLoadingSave(state, loading) {
        state.loadingOnDetail = loading;
      },
      setError(state, err) {
        state.error = err;
      },
      setNotification(state, { type, message }) {
        state.notification = { type, message, show: true };
      }
    },
    actions: {
      resetList: ({ commit }) => {
        commit("setList", []);
      },
      resetDetail: ({ commit }) => {
        commit("setDetail", { ...objectModel });
      },
      getList: async ({ commit }) => {
        commit("setLoadingList", true);
        try {
          const result = await BaseService.getList(resource);
          commit("setList", result.data);
        } catch (error) {
          console.log(error);
          commit("setNotification", {
            type: "error",
            message: "Não foi possível buscar no momento."
          });
        }
        commit("setLoadingList", false);
      },
      getOne: async ({ commit }, { id }) => {
        commit("setLoadingDetail", true);
        try {
          const result = await BaseService.getOne(resource, id);
          commit("setDetail", result.data);
        } catch (error) {
          console.log(error);
          commit("setNotification", {
            type: "error",
            message: "Não foi possível buscar o autor no momento."
          });
        }
        commit("setLoadingDetail", false);
      },
      save: async ({ commit, dispatch }, { data }) => {
        commit("setLoadingSave", true);
        try {
          const result = await BaseService.saveItem(resource, data);
          commit("setDetail", result.data);
          //router.back();
          commit("setNotification", {
            type: "success",
            message: "Salvo com sucesso"
          });
          dispatch("getList");
        } catch (error) {
          console.log(error);
          commit("setNotification", {
            type: "error",
            message: "Não foi possível salvar no momento."
          });
        }
        commit("setLoadingSave", false);
      },
      update: async ({ commit, dispatch }, { data, id }) => {
        commit("setLoadingSave", true);
        try {
          const result = await BaseService.updateItem(resource, data, id);
          commit("setDetail", result.data);
          //router.back();
          commit("setNotification", {
            type: "success",
            message: "Atualizado com sucesso"
          });
          dispatch("getList");
        } catch (error) {
          console.log(error);
          commit("setNotification", {
            type: "error",
            message: "Não foi possível atualizar no momento."
          });
        }
        commit("setLoadingSave", false);
      },
      delete: async ({ commit, dispatch }, { id }) => {
        commit("setLoadingSave", true);
        try {
          await BaseService.deleteItem(resource, id);
          commit("setDetail", { ...objectModel });
          //router.replace("/authors");
          commit("setNotification", {
            type: "success",
            message: "Registro apagado"
          });
          dispatch("getList");
        } catch (error) {
          console.log(error);
          commit("setNotification", {
            type: "error",
            message:
              "Não foi possível apagar o registro, verifique os item relacionados."
          });
        }
        commit("setLoadingSave", false);
      }
    }
  };
}
