import React from "react";
import * as contentful from "contentful";
import FeatureCluster from "./features/FeatureCluster";

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: []
    };
  }

  client = contentful.createClient({
    space: "kn93hfefankj",
    accessToken:
      "bddb1871044902e088b9aec331fca83c23351f0f2c390633d7a8e1b428317981"
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () =>
    this.client.getEntries({
      content_type: "features"
    });

  setPosts = response => {
    this.setState({
      features: response.items
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <br />
        {this.state.features.map(({ fields }, i) => (
          <FeatureCluster key={i} {...fields} />
        ))}
      </div>
    );
  }
}

export default Features;
