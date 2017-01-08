import { combineReducers } from "redux";
import analyticsReducer from "../containers/analytics/reducers";
import appReducer from "../containers/app/reducers";
import chartsReducer from "../containers/charts/reducers";
import dataReducer from "../containers/data/reducers";
import homeReducer from "../containers/home/reducers";
import settingsReducer from "../containers/settings/reducers";

const rootReducer = combineReducers({
  analyticsReducer,
  appReducer,
  chartsReducer,
  dataReducer,
  homeReducer,
  settingsReducer
});

export default rootReducer;
