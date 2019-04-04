const state = {
  linesPerGame: 0,
  powerball: false
}

// actions
const actions = {
  
  updateLinesPerGame ({ state, commit }, value) {
    commit('setLinesPerGame', value)
  },

  updatePowerball ({ state, commit }, value) {
    commit('setPowerball', value)
  },
}

// mutations
const mutations = {
 
  setLinesPerGame (state, value) {
    state.linesPerGame = value
    console.log('state', state.linesPerGame)
  },

  setPowerball (state, value) {
    state.powerball = value
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}