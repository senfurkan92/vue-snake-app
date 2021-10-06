<template>
  <div class="position" v-show="getDefeated">
    <h1 style="color:yellow">OVER</h1>
    <h3 style="color:yellow">{{getScore}}</h3>
    <br>
    <button @click="reload">AGAIN</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getDefeated', 'getScore']),
  },
  methods: {
    reload() {
      window.open('/', '_self');
    },
  },
};
</script>

<style scoped>
  .position {
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    text-align: center;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 50px;
    border-radius: 30px 0 30px 0;
  }

  button {
    border-radius: 20px;
    width: 100px;
    font-size: 20px;
  }

  button:hover {
      box-shadow: 0px 5px black;
      transform: translateY(-5px);
  }
</style>
