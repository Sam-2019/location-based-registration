import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Signup from "./component/sign-up";
import Home from "./component/Home";
import Success from "./component/Success2";
import NotFound from "./component/NotFound";

function AppROutes() {
  const find = localStorage.getItem("signupTOKEN");

  //console.log(find);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!find ? <Redirect to="/signup" /> : <Home />}
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/success">
          {!find ? <Redirect to="/" /> : <Success />}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppROutes;
