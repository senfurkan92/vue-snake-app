<template>
  <div class="part" :style="getStyle"></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCellX', 'getCellY', 'getPreyPosition']),
    getStyle() {
      const style = {
        top: `${this.getPreyPosition.positionY * this.getCellY}px`,
        left: `${this.getPreyPosition.positionX * this.getCellX}px`,
        height: `${this.getCellY}px`,
        width: `${this.getCellX}px`,
      };
      return style;
    },
  },
};
</script>

<style scoped>
    .part {
        background-color: red;
        position: absolute;
        z-index: 10;
    }
</style>
