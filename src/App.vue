<template>
  <div style="overflow-x: none; overflow-y: none">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  @font-face {
    font-family: "Game";
    src: url("~@/assets/fonts/game.ttf") format("truetype");
  }

  @font-face {
    font-family: "GameSub";
    src: url("~@/assets/fonts/Gamerock.otf") format("opentype");
  }
</style>
