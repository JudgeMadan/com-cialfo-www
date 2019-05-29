import React from "react";
import * as contentful from "contentful";
import { withRouter } from "react-router-dom";

class Redirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  redirect = () => {
    if (this.props.spaceName == "china") {
      this.props.history.push("/cn/en-US/");
    }
    if (this.props.spaceName === "intl") {
      this.props.history.push("/intl/en-US/");
    }
  };

  componentDidMount() {
    this.redirect();
  }

  render() {
    return <div />;
  }
}

export default withRouter(Redirect);
