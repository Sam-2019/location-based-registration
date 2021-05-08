import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./component/sign-up";
import Maps from "./Maps";
import NotFound from "./component/NotFound";
import Dashboard from "./admin/dashboard";

function AppROutes() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Maps />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppROutes;
