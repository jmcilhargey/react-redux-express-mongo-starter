import App from "../containers/App/index";
import Home from "../containers/Home/index";
import Data from "../containers/Data/index";
import Analytics from "../containers/Analytics/index";
import Charts from "../containers/Charts/index";
import Settings from "../containers/Settings/index"

const rootRoute = {
  childRoutes: [{
    path: "/",
    component: App,
    indexRoute: { onEnter: (nextState, replace) => replace("/home") },
    childRoutes: [
      { path: "analytics", component: Analytics },
      { path: "charts", component: Charts },
      { path: "data", component: Data },
      { path: "home", component: Home },
      { path: "settings", component: Settings }
    ]
  }]
};

export default rootRoute;
