/* eslint-disable for-direction */
/* eslint-disable for-direction */
/* eslint-disable for-direction */
<template>
    <div class="game-frame">
        <div class="game-bg">
          <endBoard></endBoard>
        </div>
        <board></board>
        <snake></snake>
        <prey></prey>
        <scoreBoard></scoreBoard>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import board from '../../components/board.vue';
import snake from '../../components/snake/index.vue';
import prey from '../../components/prey/index.vue';
import scoreBoard from '../../components/ui/scoreBoard.vue';
import endBoard from '../../components/ui/endBoard.vue';

export default {
  data() {
    return {
      gameAreaX: 0,
      gameAreaY: 0,
    };
  },
  mounted() {
    this.calculateRectangleSides();
    window.onresize = () => this.calculateRectangleSides();
    window.onkeydown = (e) => this.setDirection(e.key);
    this.randomPosition({
      maxX: this.getColumnCount,
      maxY: this.getRowCount,
      tails: this.getTails,
    });
  },
  computed: {
    ...mapGetters(['getSpeed', 'getTails', 'getDirection', 'getColumnCount', 'getRowCount']),
  },
  methods: {
    ...mapMutations(['setCellX', 'setCellY', 'setDirection', 'randomPosition']),
    calculateArea() {
      this.gameAreaX = document.querySelector('.game-bg').clientWidth;
      this.gameAreaY = document.querySelector('.game-bg').clientHeight;
    },
    calculateRectangleSides() {
      this.calculateArea();
      this.setCellX(Math.floor(this.gameAreaX) - 2);
      this.setCellY(Math.floor(this.gameAreaY) - 2);
    },
  },
  components: {
    board,
    snake,
    prey,
    scoreBoard,
    endBoard,
  },
};
</script>

<style scoped>
    .game-frame {
        position: relative;
    }

    .game-bg {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100vh;
        background-color: lightgray;
    }
</style>
