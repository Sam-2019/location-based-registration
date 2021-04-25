import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import Signup from "./component/sign-up";
import Register from "./component/register";
import Map from "./Map";

function AppROutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Map />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppROutes;
