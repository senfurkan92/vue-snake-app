<template>
    <tail v-for="tail,index in getTails"
    :positionX="tail.positionX"
    :positionY="tail.positionY"
    :key="index"></tail>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import tail from './tail.vue';

export default {
  components: {
    tail,
  },
  mounted() {
    const interval = setInterval(() => {
      this.tailPartMoveNext();
      const headX = this.getTails[0].positionX;
      const headY = this.getTails[0].positionY;
      const limit = {
        maxX: this.getColumnCount,
        maxY: this.getRowCount,
      };
      this.whetherDefeat(limit);
      if (headX === this.getPreyPosition.positionX && headY === this.getPreyPosition.positionY) {
        this.randomPosition({
          maxX: this.getColumnCount,
          maxY: this.getRowCount,
          tails: this.getTails,
        });
        this.addTailAsync();
        this.setScore(this.getSpeed);
      }
    }, (1 / this.getSpeed) * 1000);
    this.setMovementInterval(interval);
  },
  computed: {
    ...mapGetters(['getTails', 'getSpeed', 'getDirection', 'getPreyPosition', 'getColumnCount', 'getRowCount']),
  },
  methods: {
    ...mapMutations(['tailPartMoveNext', 'randomPosition', 'setScore', 'whetherDefeat', 'setMovementInterval']),
    ...mapActions(['addTailAsync']),
  },
};
</script>

<style>

</style>
