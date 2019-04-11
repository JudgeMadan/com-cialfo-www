import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: {},
      image: null,
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
    this.setState({
      features: response.items[0].fields,
      image:
        response.items[0].fields.featuresPageTeacherPortalImage2.fields.file.url
    });
  };

  render() {
    const features = this.state.features;
    return (
      <Container>
        <Row>
          <h1 className="text-center">{features.featuresPageTitle}</h1>
        </Row>
        <Row className="pb-5 justify-content-md-center">
          <img src={features.featuresPageCdProductImage} />
        </Row>
        <Row className="pb-5">
          <Col>
            <img src={this.state.image} />
          </Col>
          <Col>
            <Row>
              <h1 className="text-right">
                {features.featuresPageTeacherPortalTitle}
              </h1>
            </Row>
            <Row>
              <p className="text-right">
                {features.featuresPageTeacherPortalBlurb}
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            <Row>
              <h1>{features.featuresPageTranscriptTitle}</h1>
            </Row>
            <Row>
              <p>{features.featuresPageTranscriptBlurb}</p>
            </Row>
          </Col>
          <Col>
            <img src={this.state.image} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <h1>{features.featuresPagePartnersTitle}</h1>
        </Row>
        <Row>
          <Col>
            <Row className="justify-content-md-start">
              <img src={features.featuresPagePartnersCommonApp} />
            </Row>
          </Col>
          <Col>
            <Row className="justify-content-md-end">
              <img src={features.featuresPagePartnersParchment} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Features;
