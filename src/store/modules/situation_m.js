const situation = {
  state: () => ({
    score: 0,
  }),
  getters: {
    getScore: (state) => state.score,
  },
  mutations: {
    setScore: (state, point) => { state.score += point; },
  },
};

export default {
  ...situation,
};
