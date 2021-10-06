<template>
  <div class="part" :style="getStyle"></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCellX', 'getCellY']),
    getStyle() {
      const style = {
        top: `${this.positionY * this.getCellY}px`,
        left: `${this.positionX * this.getCellX}px`,
        height: `${this.getCellY}px`,
        width: `${this.getCellX}px`,
      };
      return style;
    },
  },
  props: {
    positionX: {
      required: true,
      type: Number,
    },
    positionY: {
      required: true,
      type: Number,
    },
  },
};
</script>

<style scoped>
    .part {
        background-color: goldenrod;
        position: absolute;
        z-index: 10;
    }
</style>
