/* @flow */
const INITIAL_STATE = ["First Item", "Second Item"];

export default (state=INITIAL_STATE, action) => {
console.error('reducer')
  switch (action.type) {
    default:
      return state;
  }
};

