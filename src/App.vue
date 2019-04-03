<template>
  <div id="app">
    <LottoPlay/>
  </div>
</template>

<script>
import LottoPlay from './components/LottoPlay.vue'

export default {
  name: 'app',
  components: {
    LottoPlay
  }
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
