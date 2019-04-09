const store = {
  namespaced: true,
  state: {
    animals: []
  },
  getters: {},
  actions: {
    saveAnimal(context) {
      console.log(context);
    }
  },
  mutations: {
    addAnimal() {}
  }
};

export default store;
