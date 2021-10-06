<template>
    <div class="board">
      <table>
        <tr v-for="i in getRowCount" :key="i" :style="{height: getCellY + 'px'}">
            <td v-for="j in getColumnCount" :key="j" :style="{width: getCellX + 'px'}"></td>
        </tr>
      </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCellX', 'getCellY', 'getColumnCount', 'getRowCount']),
  },
};
</script>

<style scoped>
  .board {
    position: absolute;
    top:0;
    left:0;
  }

  td {
    border: 0.1px solid transparent;
  }
</style>
