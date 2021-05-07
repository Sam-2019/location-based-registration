import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Signup from "./component/sign-up";
import Home from "./component/Home";
import NotFound from "./component/NotFound";
import PrivateRoute from "./component/PrivateRoute";

function AppROutes() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route>
          <NotFound />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppROutes;
