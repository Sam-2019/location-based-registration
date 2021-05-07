import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./component/sign-up";
import Home from "./component/Home";
import NotFound from "./component/NotFound";

function AppROutes() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppROutes;
