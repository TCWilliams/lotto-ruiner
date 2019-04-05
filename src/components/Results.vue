<template>
  <div class="row margin"> 
    <table class = "table table-striped col-3 centered">
      <tbody>
        <tr>
          <td class="w-50">Winnings</td>
          <td class="w-50">{{ totalWin }}</td>  
        </tr>
        <tr>
          <td class="w-50">Spend</td>
          <td class="w-50">{{ spend }}</td>
        </tr>
        <tr>
          <td class="w-50">Years</td>
          <td class="w-50">{{ years }}</td>
        </tr>
      </tbody>  
    </table>
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
