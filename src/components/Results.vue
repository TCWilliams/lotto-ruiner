<template>
  <div class="centered">
    <div>
      <label class="col-6">Total winnings</label>
      <input class="col-6" 
             v-model="totalWin"
             disabled>
    </div>
    <div>
      <label class=col-6>Total cost</label>
      <input class=col-6 
             v-model="spend"
             disabled>
    </div>
    <div>
      <label class="col-6">Years passed</label>
      <input class="col-6" 
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
