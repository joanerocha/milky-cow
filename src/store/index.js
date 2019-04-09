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
    saveAnimal({ commit, state }, animal) {
      if (!state.animals.find(a => a.number == animal.number)) {
        commit("addAnimal", animal);
      } else {
        alert("Essa vaca já existe!");
      }
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
