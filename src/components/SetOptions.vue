<template>
  <div>
    <div>
      <label>How many lines <input type="number"
             v-model=linesPerGame
             @change="setLinesPerGame">
      </label>
      </div>
      <div>
        <label>Powerball <input type="checkbox"
              v-model=powerball
              @change="setPowerball">
        </label>
      </div> 
  </div>
</template>

<script>
export default {
  name: "SetOptions",

  data() {
    return {
      linesPerGame: 0,
      powerball: false,
    };
  },

  methods: {
  
    setLinesPerGame: function() {
      this.$store.dispatch('gameOptions/updateLinesPerGame', this.linesPerGame)
    },

    setPowerball: function() {
      this.$store.dispatch('gameOptions/updatePowerball', this.powerball)
    },
  }
};
</script>

<style scoped>

</style>
