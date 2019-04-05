<template>
  <div id="app">
    <div class="mb-3">
      <h1>Lotto Dream Ruiner</h1>
    </div>
    <SetOptions/>
    <LottoPlay/>
    <div class="mb-3">
      <h3>Results</h3>
    </div>
    <Results/>
  </div>
</template>

<script>
import SetOptions from './components/SetOptions.vue'
import LottoPlay from './components/LottoPlay.vue'
import Results from './components/Results.vue'

export default {
  name: 'app',
  components: {
    SetOptions,
    LottoPlay,
    Results,
  }, 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
