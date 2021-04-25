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
import { useData } from "./Context";

function AppROutes() {
  const { auth } = useData();

  console.log(auth);
  return (
    <Router>
      <Switch>
        {/* {auth ? (
          <Route exact path="/">
            <Map />
          </Route>
        ) : (
          <Route path="/signup">
            <Signup />
          </Route>
        )}

        <Route path="/register">
          <Register />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default AppROutes;
