import React from "react";
import * as contentful from "contentful";

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
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries();

  setPosts = response => {
    this.setState({
      posts: response.items
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <p>This is the Blog Page</p>
        <br />
        {this.state.posts.map(({ fields }, i) => (
          <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
        ))}
      </div>
    );
  }
}

export default ClientStories;
