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
  const find = localStorage.getItem("signupTOKEN");

  return (
    <Router>
      <Switch>
        {find ? (
          <Route exact path="/">
            <Home />
          </Route>
        ) : (
          <Route exact path="/signup">
            <Signup />
          </Route>
        )}

        {/* {!find && <Redirect to="/signup" />} */}
      </Switch>
    </Router>
  );
}

export default AppROutes;
