<template>
  <div>
    <div>
      <label >Total winnings</label>
      <input 
             v-model="totalWin"
             disabled>
    </div>
    <div>
      <label>Total cost</label>
      <input
             v-model="spend"
             disabled>
    </div>
    <div>
      <label>Years passed</label>
      <input
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
