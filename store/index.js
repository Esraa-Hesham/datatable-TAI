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
    data:[],
    search:"",
    column:null
  };
};
export const getters = {
  selectedColumes(state) {
    return state.selectedColumes;
  },
  getApiData(state) {
    return state.data;

  },
  getSearch(state){
    return state.search;
  },
  getColumn(state){
    return state.column;
  }
};
export const mutations = {
  setColumes(state,selectedColumes){
    state.selectedColumes = Object.assign(state.selectedColumes,selectedColumes);
  },
  setApiData(state,data){
    state.data = data

  },
  setSearch(state,search){
    return state.search = search;
  },
  setColumn(state,column){
    return state.column = column;
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
