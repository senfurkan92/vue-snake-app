<template>
  <div class="position">
      <h1>Score : {{getScore}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getScore']),
  },
};
</script>

<style scoped>
  .position {
    position: absolute;
    top: 10px;
    right: 50px;
    color: crimson;
    z-index: 20;
  }
</style>
