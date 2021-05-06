import { BrowserRouter as Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const find = localStorage.getItem("signupTOKEN");
  return (
    <Route
      {...rest}
      render={(props) =>
        !find ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default PrivateRoute;
