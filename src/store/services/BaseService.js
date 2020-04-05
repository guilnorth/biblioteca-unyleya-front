import Api from "./Api";

const BaseService = {
  getList: async endpoint => {
    return await Api.get(endpoint);
  },

  getOne: async (endpoint, id) => {
    return await Api.get(`${endpoint}/${id}`);
  },

  saveItem: async (endpoint, data) => {
    return await Api.post(`${endpoint}`, JSON.stringify(data));
  },

  updateItem: async (endpoint, data, id) => {
    return await Api.put(`${endpoint}/${id}`, JSON.stringify(data));
  },

  deleteItem: async (endpoint, id) => {
    return await Api.delete(`${endpoint}/${id}`);
  }
};

export default BaseService;
