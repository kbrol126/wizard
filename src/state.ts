const state = {
  data: {
    list: [],
  },
  listeners: [],

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback();
    }
  },
  addItem(item: string) {
    const cs = state.getState();
    cs.list = cs.list.filter((i) => {
      return;
    });
    cs.list.push(item);
    this.setState(cs);
    console.log(cs);
  },
};

export { state };
