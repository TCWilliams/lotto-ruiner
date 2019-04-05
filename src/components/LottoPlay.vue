<template>
  <div>
    <div class="col-6 centered mb-3">
        <button class="btn btn-primary" 
                @click="start"
                :disabled="gameInterVal">Play</button>
        <button class="btn btn-warning" 
                @click="stop">Stop</button>
        <button class="btn btn-primary" 
                @click="reset"
                :disabled="gameInterVal">Reset</button>
    </div>
    <div class="row">
      <table class="table table-striped col-4 centered">
        <thead>
          <tr>
            <td class="w-25">Division</td>
            <td class="w-25">Number of wins</td>
            <td class="w-25">Amount won</td>
          </tr>
        </thead>
        <tbody>
          <tr v-if="powerball">
            <td>Powerball</td>
            <td>{{ winStatistics.powerball.count }}</td>
            <td>{{ winStatistics.powerball.total }}</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{{ winStatistics.divisionOne.count }}</td>
            <td>{{ winStatistics.divisionOne.total }}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{{ winStatistics.divisionTwo.count }}</td>
            <td>{{ winStatistics.divisionTwo.total }}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{{ winStatistics.divisionThree.count }}</td>
            <td>{{ winStatistics.divisionThree.total }}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{{ winStatistics.divisionFour.count }}</td>
            <td>{{ winStatistics.divisionFour.total }}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{{ winStatistics.divisionFive.count }}</td>
            <td>{{ winStatistics.divisionFive.total }}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{{ winStatistics.divisionSix.count }}</td>
            <td>{{ winStatistics.divisionSix.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div class="col-6 centered">
      <label class="col-3">Total winnings</label>
      <input class="col-3" 
             v-model="winStatistics.totalWin"
             disabled>
    </div>
    <div class="col-6 centered">
      <label class=col-3>Total cost</label>
      <input class=col-3 
             v-model="spend"
             disabled>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "LottoPlay",

  computed: {
    linesPerGame() {
      return this.$store.state.gameOptions.linesPerGame;
    },
    powerball() {
      return this.$store.state.gameOptions.powerball;
    }
  },

  data() {
    return {
      gameInterVal: null,
      targetNumbers: {},
      gameRows: [], // list of player rows
      winner: false,

      winStatistics: {
        powerball: {
          count: 0,
          total: 0
        },
        divisionOne: {
          count: 0,
          total: 0
        },
        divisionTwo: {
          count: 0,
          total: 0
        },
        divisionThree: {
          count: 0,
          total: 0
        },
        divisionFour: {
          count: 0,
          total: 0
        },
        divisionFive: {
          count: 0,
          total: 0
        },
        divisionSix: {
          count: 0,
          total: 0
        },
        totalWin: 0
      },

      count: 0, // games played
      years: 0,
      lineCost: 0.7,
      powerballCost: 0.8,
      spend: 0, // total player spend

      // average prize amounts
      prizeAmounts: {
        powerball: 20000000,
        divisionOne: 500000,
        divisionTwo: 19995,
        divisionThree: 601,
        divisionFour: 55,
        divisionFive: 30,
        divisionSix: 22
      }
    };
  },

  methods: {
    start: function() {
      // run the game until first division (or powerball if playing) has been one!
      this.gameInterVal = setInterval(() => {
        !this.winner && this.runGame();
      }, 1);
    },

    stop: function() {
      clearInterval(this.gameInterVal);
      this.gameInterVal = null;
    },

    reset: function() {
      this.winStatistics.powerball.count = 0
      this.winStatistics.powerball.total = 0
      this.winStatistics.divisionOne.count = 0
      this.winStatistics.divisionOne.total = 0
      this.winStatistics.divisionTwo.count = 0
      this.winStatistics.divisionTwo.total = 0
      this.winStatistics.divisionThree.count = 0
      this.winStatistics.divisionThree.total = 0
      this.winStatistics.divisionFour.count = 0
      this.winStatistics.divisionFour.total = 0
      this.winStatistics.divisionFive.count = 0
      this.winStatistics.divisionFive.total = 0
      this.winStatistics.divisionSix.count = 0
      this.winStatistics.divisionSix .total = 0
      this.winStatistics.totalWin = 0  
      this.count = 0 
      this.years = 0
      this.spend = 0
      this.updateResults()
    },

    /* returns an array of 6 random numbers between 1 and 40 */
    getRandomSix: function() {
      let arr = [];
      arr.length = 0;
      for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 40) + 1;
        !arr.includes(randomNumber) // no duplicates
          ? arr.push(randomNumber)
          : i--;
      }
      return arr;
    },

    /* return a bonus number not in row */
    getBonus: function() {
      let bonus = Math.floor(Math.random() * 40) + 1;
      if (!this.targetNumbers.row.includes(bonus)) {
        return bonus;
      }
      return this.getBonus(); // recursive call until a valid bonus number produced
    },

    getPowerball: function() {
      return Math.floor(Math.random() * 10) + 1;
    },

    /* Play Lotto! */
    runGame: function() {
      this.gameRows.length = 0; // reset rows
      this.targetNumbers = {};
      this.count++;
      this.spend += this.linesPerGame * this.lineCost;
      if (this.powerball) {
        this.spend += this.linesPerGame * this.powerballCost;
      }

      this.years = Math.floor(this.count / 52);
      

      (this.targetNumbers.row = this.getRandomSix()), // get target numbers and bonus
        (this.targetNumbers.bonus = this.getBonus());
      if (this.powerball) {
        this.targetNumbers.powerball = this.getPowerball();
      }

      for (let i = 0; i < this.linesPerGame; i++) {
        // get player rows
        const line = { row: this.getRandomSix() };
        if (this.powerball && i < this.linesPerGame) {
          line.powerball = this.getPowerball();
        }
        this.gameRows.push(line);
      }
      // check each row and tally up win stats
      for (const line of this.gameRows) {
        const matched = this.targetNumbers.row.filter(e =>
          line.row.includes(e)
        ); // array of matched numbers
        const bonusMatch = line.row.includes(this.targetNumbers.bonus);
        let powerballMatch;
        if (this.powerball) {
          powerballMatch =
            line.powerball && line.powerball === this.targetNumbers.powerball;
        }

        if (matched.length < 3) continue; // no wins, jump out of loop
        this.tallyWinnings(matched.length, bonusMatch, powerballMatch); // else add up winnings
        this.updateResults()
        if (this.winner) {
          break;
        }
      }
    },

    tallyWinnings: function(matchedNumbers, bonusMatch, powerballMatch) {
      switch (matchedNumbers) {
        case 6:
          if (powerballMatch) {
            this.winStatistics.powerball.count++;
            this.winStatistics.powerball.total += this.prizeAmounts.powerball;
            this.winStatistics.totalWin += this.prizeAmounts.powerball;
            this.winner = true;
          }
          this.winStatistics.divisionOne.count++;
          this.winStatistics.divisionOne.total += this.prizeAmounts.divisionOne;
          this.winStatistics.totalWin += this.prizeAmounts.divisionOne;
          if (!this.powerball) this.winner = true;
          break;
        case 5:
          if (bonusMatch) {
            this.winStatistics.divisionTwo.count++;
            this.winStatistics.divisionTwo.total += this.prizeAmounts.divisionTwo;
            this.winStatistics.totalWin += this.prizeAmounts.divisionTwo;
          } else {
            this.winStatistics.divisionThree.count++;
            this.winStatistics.divisionThree.total += this.prizeAmounts.divisionThree;
            this.winStatistics.totalWin += this.prizeAmounts.divisionThree;
          }
          break;
        case 4:
          if (bonusMatch) {
            this.winStatistics.divisionFour.count++;
            this.winStatistics.divisionFour.total += this.prizeAmounts.divisionFour;
            this.winStatistics.totalWin += this.prizeAmounts.divisionFour;
          } else {
            this.winStatistics.divisionFive.count++;
            this.winStatistics.divisionFive.total += this.prizeAmounts.divisionFive;
            this.winStatistics.totalWin += this.prizeAmounts.divisionFive;
          }
          break;
        case 3:
          if (bonusMatch) {
            this.winStatistics.divisionSix.count++;
            this.winStatistics.divisionSix.total += this.prizeAmounts.divisionSix;
            this.winStatistics.totalWin += this.prizeAmounts.divisionSix;
          }
          break;
      } 
    },

    updateResults: function() {
      this.$store.dispatch('results/updateTotalWin', this.winStatistics.totalWin)
      this.$store.dispatch('results/updateSpend', this.spend)
      this.$store.dispatch('results/updateYears', this.years)
    }
  }
};
</script>

<style scoped>
.centered {
  margin: auto;
  width: 50% !important;
}
</style>
