import React from "react";
import * as contentful from "contentful";
import ClientStoriesItem from "./clientStories/ClientStoriesItem";
import ClientStoriesCarousel from "./clientStories/ClientStoriesCarousel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Octicon, { Location, TriangleUp } from "@githubprimer/octicons-react";

class ClientStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
  });

  componentDidMount() {
    this.fetchClients().then(this.setClients);
  }

  fetchClients = () =>
    this.client.getEntries({
      content_type: "clientStoryPage",
      limit: this.state.loadLimit,
      skip: this.state.skip
    });

  setClients = response => {
    const clientStoryPageStory =
      response.items[0].fields.clientStoryPageStory.fields;
    for (let key in clientStoryPageStory) {
      this.setState({
        [key]: clientStoryPageStory[key]
      });
    }
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
    return (
      <Container>
        <Row>
          <ClientStoriesItem className="pt-5" />
        </Row>
        <Row className="justify-content-md-center">
          <h1>More Stories</h1>
        </Row>
        <Row className="justify-content-md-center">
          <ClientStoriesCarousel />
        </Row>
      </Container>
    );
  }
}

export default ClientStories;
