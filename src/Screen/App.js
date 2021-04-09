import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInPage from "../Pages/SignIn/SignInPage";
import SignUpPage from "../Pages/SignUp/SignUpPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route path="/SignUp" component={SignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
