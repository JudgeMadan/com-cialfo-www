import React from "react";
import * as contentful from "contentful";
import ClientStoriesItem from "./clientStories/ClientStoriesItem";
import ClientStoriesMarquee from "./clientStories/ClientStoriesMarquee";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Octicon, { Location, TriangleUp } from "@githubprimer/octicons-react";

class ClientStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientStoryApiKey: `7BLnyQxFOezaog26iqOZ7`
    };
  }

  updateClientStoryApiKey = clientStoryApiKey => {
    this.setState({
      clientStoryApiKey: clientStoryApiKey
    });
    console.log(this.state.clientStoryApiKey);
  };

  render() {
    return (
      <Container>
        <Row>
          <ClientStoriesItem
            clientStoryApiKey={this.state.clientStoryApiKey}
            className="pt-5"
          />
        </Row>
        <Row className="justify-content-md-center">
          <h1>More Stories</h1>
        </Row>
        <Row className="justify-content-md-center">
          <ClientStoriesMarquee
            updateClientStoryApiKey={this.updateClientStoryApiKey}
          />
        </Row>
      </Container>
    );
  }
}

export default ClientStories;
