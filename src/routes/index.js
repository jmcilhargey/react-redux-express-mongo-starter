import App from "../containers/App/index";
import Home from "../containers/Home/index";
import Data from "../containers/Data/index";
import Analytics from "../containers/Analytics/index";
import Settings from "../containers/Settings/index";
import NotFound from "../containers/NotFound/index";

const rootRoute = {
  childRoutes: [{
    path: "/",
    component: App,
    indexRoute: { onEnter: (nextState, replace) => replace("/home") },
    childRoutes: [
      { path: "analytics", component: Analytics },
      { path: "data", component: Data },
      { path: "home", component: Home },
      { path: "settings", component: Settings },
      { path: "*", component: NotFound }
    ]
  }]
};

export default rootRoute;
