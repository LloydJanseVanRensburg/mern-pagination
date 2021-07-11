import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPassword/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen/ResetPasswordScreen";

import "./App.css";

const App = () => {

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
          <PrivateRoute path="/" component={PrivateScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
