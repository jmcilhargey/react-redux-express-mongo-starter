const initialState = {
  counter: 0
};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return Object.assign({}, state, { counter: state.counter + 1 });
      break;
    case "DECREMENT_COUNTER":
      return Object.assign({}, state, { counter: state.counter - 1 });
      break;
    default:
      return state;
  }
}

export default settingsReducer;
