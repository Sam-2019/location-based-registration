import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Signup from "./component/sign-up";
import Home from "./component/Home";
import Success from "./component/Success2";

import { useData } from "./Context/Context";

function AppROutes() {
  const { token } = useData();
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/success">
          {!token ? <Redirect to="/" /> : <Success />}
        </Route>

        <Route exact path="/">
          {!token ? <Redirect to="/signup" /> : <Home />}
        </Route>
      </Switch>
    </Router>
  );
}

export default AppROutes;
