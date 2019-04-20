import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";

class FeaturesSend extends React.Component {
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
    this.fetchFeaturesSendingPage().then(this.setFeaturesSendingPage);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchFeaturesSendingPage().then(this.setFeaturesSendingPage);
    }
  }

  fetchFeaturesSendingPage = () => {
    return this.client.getEntries({
      content_type: "featuresSendingPage",
      locale: this.props.locale
    });
  };

  setFeaturesSendingPage = response => {
    // console.log(response.items[0].fields);
    const sendingPageContent = response.items[0].fields;
    for (let key in sendingPageContent) {
      if (typeof sendingPageContent[key] === "string") {
        this.setState({
          [key]: sendingPageContent[key]
        });
      } else if (Array.isArray(sendingPageContent[key])) {
        this.setState({
          [key]: sendingPageContent[key]
        });
      } else {
        this.setState({
          [key]: sendingPageContent[key].fields.file.url
        });
      }
    }
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Row>
          <h1>{this.state.sendTitle}</h1>
        </Row>
        <Row className="homePageVideoCaseStudyVideoEmbed">
          <ReactPlayer url={this.state.sendVideo} />
        </Row>
        <Row>
          <Col>
            <img src={this.state.sendPortalImage} />
          </Col>
          <Col>
            <Row>
              <h1>{this.state.sendPortalTitle}</h1>
            </Row>
            <Row>
              <h1>{this.state.sendPortalBlurb}</h1>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <h1>{this.state.sendTranscriptTitle}</h1>
            </Row>
            <Row>
              <h1>{this.state.sendTranscriptBlurb}</h1>
            </Row>
          </Col>
          <Col>
            <img src={this.state.sendTranscriptImage} />
          </Col>
        </Row>
        <Row>
          <h1>{this.state.sendPartnersTitle}</h1>
        </Row>
      </Container>
    );
  }
}
export default FeaturesSend;
