import React from "react";
import * as contentful from "contentful";
import FeatureCluster from "./features/FeatureCluster";
import Button from "react-bootstrap/Button";

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      skip: 0,
      loadLimit: 1
    };
  }

  client = contentful.createClient({
    space: "kn93hfefankj",
    accessToken:
      "bddb1871044902e088b9aec331fca83c23351f0f2c390633d7a8e1b428317981"
  });

  componentDidMount() {
    this.fetchFeatures().then(this.setFeatures);
  }

  fetchFeatures = () =>
    this.client.getEntries({
      content_type: "features",
      limit: this.state.loadLimit,
      skip: this.state.skip
    });

  setFeatures = response => {
    this.setState({
      features: response.items
    });
  };

  loadMore = () => {
    this.setState(
      {
        skip: this.state.skip + 1
      },
      () => this.fetchFeatures().then(this.setFeatures)
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <br />
        {this.state.features.map(({ fields }, i) => (
          <FeatureCluster key={i} {...fields} />
        ))}
        <Button variant="info" onClick={() => this.loadMore()}>
          Add Feature Story
        </Button>
      </div>
    );
  }
}

export default Features;
