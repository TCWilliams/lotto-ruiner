const state = {
  totalWin: 0,
  spend: 0,
  years: 0,
}

// actions
const actions = {
  
  updateTotalWin ({ state, commit }, value) {
    commit('setTotalWin', value)
  },

  updateSpend ({ state, commit }, value) {
    commit('setSpend', value)
  },

  updateYears ({ state, commit }, value) {
    commit('setYears', value)
  },
}

// mutations
const mutations = {
 
  setTotalWin (state, value) {
    state.totalWin = value
  },

  setSpend (state, value) {
    state.spend = value
  },

  setYears (state, value) {
    state.years = value
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}