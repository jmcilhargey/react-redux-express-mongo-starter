import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import analyticsReducer from "../containers/analytics/reducers";
import appReducer from "../containers/app/reducers";
import dataReducer from "../containers/data/reducers";
import homeReducer from "../containers/home/reducers";
import settingsReducer from "../containers/settings/reducers";

const rootReducer = combineReducers({
  analyticsReducer,
  appReducer,
  dataReducer,
  homeReducer,
  settingsReducer,
  routing: routerReducer
});

export default rootReducer;
