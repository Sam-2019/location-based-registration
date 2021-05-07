import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./component/sign-up";
import Maps from "./Maps";
import NotFound from "./component/NotFound";

function AppROutes() {
  return (
    <Router>
      <Switch>
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
