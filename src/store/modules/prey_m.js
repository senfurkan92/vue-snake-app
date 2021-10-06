const prey = {
  state: () => ({
    positionX: 0,
    positionY: 0,
  }),
  getters: {
    getPreyPosition(state) {
      return {
        positionX: state.positionX,
        positionY: state.positionY,
      };
    },
  },
  mutations: {
    randomPosition(state, limit) {
      let randomX = 0;
      let randomY = 0;
      do {
        randomX = Math.floor(Math.random() * limit.maxX);
        randomY = Math.floor(Math.random() * limit.maxY);
      // eslint-disable-next-line no-loop-func
      } while (limit.tails.some((x) => randomX === x.positionX && randomY === x.positionY));
      state.positionX = randomX;
      state.positionY = randomY;
    },
  },
};

export default {
  ...prey,
};
