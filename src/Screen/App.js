import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminUserInfoPage from "../Pages/Admin/UserInfo/AdminUserInfoPage";
import AdminMainPage from "../Pages/Admin/Main/AdminMainPage";
import MainPage from "../Pages/Main/MainPage";
import SignInPage from "../Pages/SignIn/SignInPage";
import SignUpPage from "../Pages/SignUp/SignUpPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/signUp" component={SignUpPage} />
        <Route path="/signIn" component={SignInPage} />
        <Route path="/admin/" exact component={AdminMainPage} />
        <Route path="/admin/userInfo" component={AdminUserInfoPage} />
      </Switch>
    </Router>
  );
}

export default App;
