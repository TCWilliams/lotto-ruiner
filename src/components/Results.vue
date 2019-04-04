<template>
  <div>
    <div class="col-6 centered">
      <label class="col-3">Total winnings</label>
      <input class="col-3" 
             v-model="totalWin"
             disabled>
    </div>
    <div class="col-6 centered">
      <label class=col-3>Total cost</label>
      <input class=col-3 
             v-model="spend"
             disabled>
    </div>
    <div class="col-6 centered">
      <label class="col-3">Years passed</label>
      <input class="col-3" 
             v-model="years"
             disabled>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",

  computed: {
    totalWin() {
      return this.$store.state.results.totalWin;
    },
    spend() {
      return this.$store.state.results.spend;
    },
    years() {
      return this.$store.state.results.years;
    }
  },

 
};
</script>

<style scoped>
.centered {
  margin: auto;
  width: 50% !important;
}
</style>
