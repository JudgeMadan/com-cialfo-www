import React from "react";
import { Link } from "react-router-dom";

class FeatureClusterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.location.state.props;
  }
  render() {
    console.log(this.state);
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <h1 className="display-4">{this.state.featureName}</h1>
            <img
              className=" rounded img-thumbnail img-fluid"
              src={this.state.icon}
            />
          </div>
          <p className="display-6">{this.state.featureDescription}</p>
        </div>
        <Link
          className="btn btn-primary"
          to={{
            pathname: "/feature"
          }}
        >
          Back to Features
        </Link>
      </div>
    );
  }
}
export default FeatureClusterItem;
