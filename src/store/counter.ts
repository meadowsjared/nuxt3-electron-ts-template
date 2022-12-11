import { defineStore } from 'pinia';

interface State {
  _count: number;
}

export const useCounterStore = defineStore('counter', {
  state: (): State => ({
    _count: 0,
  }),
  getters: {
    count: (state: State) => state._count,
  },
  actions: {
    add() {
      this._count++;
    },
  },
});
