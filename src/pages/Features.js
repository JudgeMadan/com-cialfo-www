import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "zh-CN"
    };
  }
  client = contentful.createClient({
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
  });

  componentDidMount() {
    this.fetchFeatures().then(this.setFeatures);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      this.fetchFeatures().then(this.setFeatures);
    }
  }

  fetchFeatures = () => {
    return this.client.getEntries({
      content_type: "featuresPage",
      locale: this.props.locale
    });
  };

  setFeatures = response => {
    const featureContent = response.items[0].fields;
    console.log(featureContent);
    for (let key in featureContent) {
      if (typeof featureContent[key] === "string") {
        this.setState({
          [key]: featureContent[key]
        });
      } else {
        this.setState({
          [key]: featureContent[key].fields.file.url
        });
      }
    }
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Row>
          <h1>{this.state.featuresPageTitle}</h1>
        </Row>
        <Row className="pb-5 justify-content-md-center">
          <img src={this.state.featuresPageCdProductImage} />
        </Row>
        <Row className="pb-5">
          <Col>
            <img src={this.state.featuresPageTeacherPortalImage2} />
          </Col>
          <Col>
            <Row>
              <h1 className="text-right">
                {this.state.featuresPageTeacherPortalTitle}
              </h1>
            </Row>
            <Row>
              <p className="text-right">
                {this.state.featuresPageTeacherPortalBlurb}
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            <Row>
              <h1>{this.state.featuresPageTranscriptTitle}</h1>
            </Row>
            <Row>
              <p>{this.state.featuresPageTranscriptBlurb}</p>
            </Row>
          </Col>
          <Col>
            <img src={this.state.featuresPageTeacherPortalImage2} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <h1>{this.state.featuresPagePartnersTitle}</h1>
        </Row>
        <Row>
          <Col>
            <Row className="justify-content-md-start">
              <img src={this.state.featuresPagePartnersCommonApp} />
            </Row>
          </Col>
          <Col>
            <Row className="justify-content-md-end">
              <img src={this.state.featuresPagePartnersParchment} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Features;
