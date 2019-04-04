import Vue from 'vue'
import Vuex from 'vuex'
import gameOptions from './modules/gameOptions'
import results from './modules/results'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    gameOptions,
    results,
  },
  
})