import React from "react";
import * as contentful from "contentful";
import ClientStoriesItem from "./clientStories/ClientStoriesItem";

class ClientStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  client = contentful.createClient({
    space: "kn93hfefankj",
    accessToken:
      "bddb1871044902e088b9aec331fca83c23351f0f2c390633d7a8e1b428317981"
  });

  componentDidMount() {
    this.fetchClients().then(this.setClients);
  }

  fetchClients = () =>
    this.client.getEntries({
      content_type: "title"
    });

  setClients = response => {
    this.setState({
      posts: response.items
    });
  };

  render() {
    return (
      <div>
        <br />
        {this.state.posts.map(({ fields }, i) => (
          <ClientStoriesItem key={i} {...fields} />
        ))}
      </div>
    );
  }
}

export default ClientStories;
