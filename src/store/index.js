import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    animals: []
  },
  getters: {},
  actions: {
    saveAnimal({ commit }, animal) {
      commit("addAnimal", animal);
    },
    editAnimal({ commit }, animal) {
      commit("updateAnimal", animal);
    }
  },
  mutations: {
    addAnimal(state, animal) {
      state.animals = state.animals.concat(animal);
    },
    updateAnimal(state, animal) {
      state.animals = [
        ...state.animals.filter(a => a.number != animal.number),
        animal
      ];
    }
  },
  plugins: [createPersistedState()]
});

export default Store;
