import { createStore } from 'vuex';
import area from './modules/area_m';
import snake from './modules/snake_m';
import prey from './modules/prey_m';
import situation from './modules/situation_m';

const store = createStore({
  modules: {
    areaModule: area,
    snakeModule: snake,
    preyModule: prey,
    situationModule: situation,
  },
});

export default store;
