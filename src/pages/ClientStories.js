import React from "react";
import * as contentful from "contentful";
import ClientStoriesItem from "./clientStories/ClientStoriesItem";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Octicon, { Location } from "@githubprimer/octicons-react";

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
          <Col>
            <Row>
              <p className="font-weight-bold">
                {this.state.clientStorySchoolName}
              </p>
            </Row>
            <Row>{this.state.clientStoryStoryBlurb}</Row>
          </Col>
          <Col>
            <Row>
              <img src={this.state.clientStorySchoolImage} />
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Row>
              <Octicon size="large" icon={Location} />
            </Row>
            <Row>
              <p>{'"' + this.state.clientStoryShortTestimonial + '"'}</p>
            </Row>
            <Row>
              <p>
                Number of Seniors:
                <span>{" " + this.state.clientStoryNumberOfSeniors}</span>
              </p>
            </Row>
            <Row>
              <p>
                Counseling Team:
                <span>{" " + this.state.clientStoryConsultingTeam}</span>
              </p>
            </Row>
            <Row>
              <p>
                Curriculum:
                <span>{" " + this.state.clientStoryCurriculum}</span>
              </p>
            </Row>
            <Row>
              <p>
                Location:
                <span>{" " + this.state.clientStorySchoolLocation}</span>
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ClientStories;
