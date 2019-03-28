import React from "react";
import { Switch, Route } from "react-router-dom";
import ClientStories from "../pages/ClientStories";
import Features from "../pages/Features";
import ClientStoriesPost from "../pages/clientStories/ClientStoriesPost";
import FeatureClusterItem from "../pages/features/FeatureClusterItem.js";
import Home from "../pages/Home";

class Router extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              locale={this.props.locale}
              updateLocale={this.props.updateLocale}
            />
          )}
        />
        <Route exact path="/client" component={ClientStories} />
        <Route exact path="/feature" component={Features} />
        <Route
          path="/feature/:featureClusterItem"
          component={FeatureClusterItem}
        />
        <Route path="/client/:clientStoryItem" component={ClientStoriesPost} />
      </Switch>
    );
  }
}
export default Router;
