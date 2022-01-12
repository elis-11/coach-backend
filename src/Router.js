import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/register">
          <div>Register</div>
        </Route>
        <Route path="/login">
          <div>Login</div>
        </Route>
        <Route path="/"customer>
          <div>Customers</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
