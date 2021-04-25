import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Signup from "./component/sign-up";
import Home from "./component/Home";

import { useData } from "./Context";

function AppROutes() {
  const { auth } = useData();

  console.log(auth);
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        {!auth ? <Redirect to="/signup" /> : <Home />}

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppROutes;
