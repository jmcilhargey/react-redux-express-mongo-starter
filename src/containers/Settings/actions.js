export function incrementCounter() {
  return {
    type: "INCREMENT_COUNTER"
  };
}

export function decrementCounter() {
  return {
    type: "DECREMENT_COUNTER"
  };
}

export function fetchCounter() {
  return (dispatch, getState) => {
    // dispatch(requestCounter());
    // This is where we could fetch data asynchronously
    // dispatch(receiveCounter());
  }
}

export function requestCounter() {
  return {
    type: "REQUEST_COUNTER"
  }
}

export function receiveCounter(counter) {
  return {
    type: "RECIEVE_COUNTER",
    counter: counter
  }
}
