<template>
  <tailpart :positionX="positionX" :positionY="positionY"></tailpart>
</template>

<script>
import { mapGetters } from 'vuex';
import tailpart from './tailpart.vue';

export default {
  components: {
    tailpart,
  },
  computed: {
    ...mapGetters(['getCellX', 'getCellY']),
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

<style>
</style>
