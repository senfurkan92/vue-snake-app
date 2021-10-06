export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../../views/home/index.vue'),
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../../views/game/index.vue'),
  },
];
