import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Signup from "./component/sign-up";
import Home from "./component/Home";
import NotFound from "./component/NotFound";
import PrivateRoute from "./component/PrivateRoute";

function AppROutes() {
  const find = localStorage.getItem("signupTOKEN");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>

        <PrivateRoute exact path="/register">
          <Home />
        </PrivateRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppROutes;
