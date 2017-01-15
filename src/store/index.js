import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import promise from "redux-promise";
import createLogger from "redux-logger";

const logger = createLogger();
const persistedState = null;

let store = createStore(rootReducer, applyMiddleware(thunk, promise));

export default store;
