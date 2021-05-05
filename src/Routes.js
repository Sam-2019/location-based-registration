import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Signup from "./component/sign-up";
import Home from "./component/Home";
import Success from "./component/Success2";

function AppROutes() {
  const find = localStorage.getItem("signupTOKEN");

  console.log(find);

  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/success">
          {!find ? <Redirect to="/" /> : <Success />}
        </Route>

        <Route exact path="/">
          {!find ? <Redirect to="/signup" /> : <Home />}
        </Route>
      </Switch>
    </Router>
  );
}

export default AppROutes;
