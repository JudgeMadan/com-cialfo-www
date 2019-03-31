import React from "react";
import * as contentful from "contentful";
import ClientStoriesItem from "./clientStories/ClientStoriesItem";
import Button from "react-bootstrap/Button";

class ClientStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loadLimit: 1,
      skip: 0
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
      content_type: "title",
      limit: this.state.loadLimit,
      skip: this.state.skip
    });

  setClients = response => {
    this.setState({
      posts: response.items
    });
  };

  loadMore = () => {
    this.setState(
      {
        loadLimit: this.state.loadLimit + 1
      },
      () => this.fetchClients().then(this.setClients)
    );
  };

  render() {
    console.log(this.state.loadLimit);
    console.log(this.state.posts);
    return (
      <div>
        <br />
        {this.state.posts.map(({ fields }, i) => (
          <ClientStoriesItem key={i} {...fields} />
        ))}
        <Button variant="info" onClick={() => this.loadMore()}>
          Add Client Story
        </Button>
      </div>
    );
  }
}

export default ClientStories;
