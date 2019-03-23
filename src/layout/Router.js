import React from "react";
import { Switch, Route } from "react-router-dom";
import ClientStories from "../pages/ClientStories";
import ClientStoriesPost from "../pages/clientStories/ClientStoriesPost";
import Home from "../pages/Home";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/client" component={ClientStories} />
    <Route path="/client/:clientStoryItem" component={ClientStoriesPost} />
  </Switch>
);

export default Router;
