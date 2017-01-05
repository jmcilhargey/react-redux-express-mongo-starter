import App from "../containers/App";
import Home from "../containers/Home";
import Data from "../containers/Data";
import Analytics from "../containers/Analytics";
import Charts from "../containers/Charts";
import Settings from "../containers/Settings"

const rootRoute = {
  childRoutes: [{
    path: "/",
    component: App,
    childRoutes: [
      Analytics,
      Charts,
      Data,
      Home,
      Settings
    ]
  }]
};

export default rootRoute;
