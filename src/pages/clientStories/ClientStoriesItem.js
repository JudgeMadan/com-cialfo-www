import * as contentful from "contentful";
import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Octicon, { Location, TriangleUp } from "@githubprimer/octicons-react";

class ClientStoriesItem extends React.Component {
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
      content_type: "clientStory",
      limit: this.state.loadLimit
    });

  setClients = response => {
    const clientStoryPageStory = response.items[0].fields;
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
    console.log(this.state);
    return (
      <Container className="py-5">
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
            <Row className="justify-content-md-end">
              <img src={this.state.clientStorySchoolImage} />
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Container className="schoolCard font-weight-bold px-5 mr-5">
              <Row>
                <Octicon size="large" icon={TriangleUp} />
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
                  <Octicon size="small" icon={Location} />
                  <span>{" " + this.state.clientStorySchoolLocation}</span>
                </p>
              </Row>
            </Container>
          </Col>
          <Col>
            <Row>
              <p>{this.state.clientStoryClientStoryDetail1}</p>
            </Row>
            <Row>
              <img src="https://via.placeholder.com/150" />
            </Row>
            <Row>
              <p>{this.state.clientStoryClientStoryDetail2A}</p>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ClientStoriesItem;
