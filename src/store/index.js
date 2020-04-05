import Vue from "vue";
import Vuex from "vuex";

//Modules
import authors from "./modules/authors";
import books from "./modules/books";
import genres from "./modules/genres";
import publishers from "./modules/publishers";
import modal from "./modules/modal";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authors,
    books,
    genres,
    publishers,
    modal
  }
});
