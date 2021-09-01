export const strict = false

export const state = () => {
  return {
    selectedColumes:{
      id:true,
      username:true,
      email:true,
      phone:true,
      website:true,
    },
    data:[]
  };
};
export const getters = {
  selectedColumes(state) {
    return state.selectedColumes;
  },
  getApiData(state) {
    return state.data;

  },
};
export const mutations = {
  setColumes(state,selectedColumes){
    state.selectedColumes = Object.assign(state.selectedColumes,selectedColumes);
  },
  setApiData(state,data){
    state.data = data

  }
};
export const actions = {

  getData({ commit }) {
    this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      commit("setApiData", res);

    })

  },

};
