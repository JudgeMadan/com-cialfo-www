import React from "react";
import { Switch, Route } from "react-router-dom";
import ClientStories from "../pages/ClientStories";
import Features from "../pages/Features";
import ClientStoriesPost from "../pages/clientStories/ClientStoriesPost";
import FeatureClusterItem from "../pages/features/FeatureClusterItem.js";
import Home from "../pages/Home";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/client" component={ClientStories} />
    <Route exact path="/feature" component={Features} />
    <Route path="/feature/:featureClusterItem" component={FeatureClusterItem} />
    <Route path="/client/:clientStoryItem" component={ClientStoriesPost} />
  </Switch>
);

export default Router;
