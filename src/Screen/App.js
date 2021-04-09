import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminMainPage from "../Pages/Admin/AdminMainPage";
import SignInPage from "../Pages/SignIn/SignInPage";
import SignUpPage from "../Pages/SignUp/SignUpPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route path="/SignUp" component={SignUpPage} />
        <Route path="/AdminMain" component={AdminMainPage} />
      </Switch>
    </Router>
  );
}

export default App;
