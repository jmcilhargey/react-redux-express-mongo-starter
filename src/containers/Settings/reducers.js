const initialState = {
  isFetching: false,
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
    case "REQUEST_COUNTER":
      return Object.assign({}, state, { isFetching: true });
      break;
    case "RECIEVE_COUNTER":
      return Object.assign({}, state, { isFetching: false }, { counter: action.counter });
      break;
    default:
      return state;
  }
}

export default settingsReducer;
