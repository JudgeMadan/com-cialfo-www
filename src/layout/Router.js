import React from "react";
import { Switch, Route } from "react-router-dom";
import ClientStories from "../pages/ClientStories";
import Home from "../pages/Home";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/client" component={ClientStories} />
  </Switch>
);

export default Router;
