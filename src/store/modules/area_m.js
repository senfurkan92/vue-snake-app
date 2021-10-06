const area = {
  state: () => ({
    cellX: 0,
    cellY: 0,
    columnCount: 40,
    rowCount: 20,
  }),
  mutations: {
    setCellX(state, gameAreaX) {
      state.cellX = gameAreaX / state.columnCount;
    },
    setCellY(state, gameAreaY) {
      state.cellY = gameAreaY / state.rowCount;
    },
  },
  getters: {
    getCellX(state) {
      return state.cellX;
    },
    getCellY(state) {
      return state.cellY;
    },
    getColumnCount(state) {
      return state.columnCount;
    },
    getRowCount(state) {
      return state.rowCount;
    },
  },
};

export default {
  ...area,
};
