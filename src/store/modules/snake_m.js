const snake = {
  state: () => ({
    direction: 6,
    tails: [
      {
        positionX: 4,
        positionY: 0,
      },
    ],
    speed: 10,
    movementInterval: null,
    defeated: false,
  }),
  getters: {
    getDirection(state) {
      return state.direction;
    },
    getTails(state) {
      return state.tails;
    },
    getSpeed(state) {
      return state.speed;
    },
    getDefeated(state) {
      return state.defeated;
    },
  },
  mutations: {
    tailPartMoveNext(state) {
      let total = state.tails.length - 1;
      while (total >= 0) {
        if (total === 0) {
          switch (state.direction) {
            case 6:
              state.tails[total].positionX += 1;
              break;
            case 4:
              state.tails[total].positionX -= 1;
              break;
            case 8:
              state.tails[total].positionY -= 1;
              break;
            case 2:
              state.tails[total].positionY += 1;
              break;
            default:
              break;
          }
        } else if (total >= 1) {
          state.tails[total].positionX = state.tails[total - 1].positionX;
          state.tails[total].positionY = state.tails[total - 1].positionY;
        }
        total -= 1;
      }
    },
    setDirection(state, direction) {
      let d = direction;
      switch (direction) {
        case 'ArrowUp':
          d = 8;
          break;
        case 'ArrowDown':
          d = 2;
          break;
        case 'ArrowRight':
          d = 6;
          break;
        case 'ArrowLeft':
          d = 4;
          break;
        default:
          break;
      }
      switch (Number(d)) {
        case 6:
          if (state.direction !== 4) {
            state.direction = d;
          }
          break;
        case 4:
          if (state.direction !== 6) {
            state.direction = d;
          }
          break;
        case 8:
          if (state.direction !== 2) {
            state.direction = d;
          }
          break;
        case 2:
          if (state.direction !== 8) {
            state.direction = d;
          }
          break;
        default:
          break;
      }
    },
    setSpeed(state, speed) {
      state.speed = speed;
    },
    addTail(state, tailPart) {
      state.tails.push(tailPart);
    },
    setMovementInterval(state, payload) {
      state.movementInterval = payload;
    },
    whetherDefeat(state, limit) {
      const headX = state.tails[0].positionX;
      const headY = state.tails[0].positionY;
      if (headX >= limit.maxX || headX < 0) {
        clearInterval(state.movementInterval);
        state.defeated = true;
      } else if (headY >= limit.maxY || headY < 0) {
        clearInterval(state.movementInterval);
        state.defeated = true;
      } else if (state.tails.slice(3).find((x) => x.positionX === headX && x.positionY === headY)) {
        clearInterval(state.movementInterval);
        state.defeated = true;
      }
    },
  },
  actions: {
    addTailAsync({ state, commit }) {
      const timeout = 10;
      setTimeout(() => {
        const part = {
          positionX: state.tails[state.tails.length - 1].positionX,
          positionY: state.tails[state.tails.length - 1].positionY,
        };
        commit('addTail', part);
      }, timeout);
    },
  },
};

export default {
  ...snake,
};
