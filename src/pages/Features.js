import React from "react";
import * as contentful from "contentful";
import FeatureCluster from "./features/FeatureCluster";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: {},
      image: null,
      skip: 0,
      loadLimit: 1,
      canAddFeatures: true,
      locale: "en-US"
    };
  }
  image = "hey";
  client = contentful.createClient({
    space: "1acwuo4zy8aa",
    accessToken:
      "c6080034f52655b2fdb9267c7c555bff17c0134a4ae75b646bb112d992b485b2"
  });

  componentDidMount() {
    this.fetchFeatures().then(this.setFeatures);
  }

  fetchFeatures = () => {
    return this.client.getEntries({
      content_type: "featuresPage",
      limit: this.state.loadLimit,
      skip: this.state.skip,
      locale: this.state.locale
    });
  };

  setFeatures = response => {
    this.setState({
      features: response.items[0].fields,
      image:
        response.items[0].fields.featuresPageTeacherPortalImage2.fields.file.url
    });
  };

  loadMore = () => {
    this.setState(
      {
        skip: this.state.skip + 1
      },
      () =>
        this.fetchFeatures().then(response => {
          if (response.items.length > 0) {
            this.setFeatures(response);
          } else {
            this.setState({
              canAddFeatures: false
            });
          }
        })
    );
  };

  render() {
    console.log(this.state);
    const features = this.state.features;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 className="justify-content-md-center">
            {features.featuresPageTitle}
          </h1>
        </Row>
        <Row className="justify-content-md-center">
          <img src={features.featuresPageCdProductImage} />
        </Row>
        <Row>
          <Col>
            <img src={this.state.image} />
          </Col>
          <Col>
            <Row>{features.featuresPageTeacherPortalTitle}</Row>
            <Row>
              <span className="text-right">
                {features.featuresPageTeacherPortalBlurb}
              </span>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>{features.featuresPageTranscriptTitle}</Row>
            <Row>{features.featuresPageTranscriptBlurb}</Row>
          </Col>
          <Col>
            <img src={this.state.image} />
            {/* <img src={features.featuresPageTranscriptImage} /> */}
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          {features.featuresPagePartnersTitle}
        </Row>
        <Row>
          <Col>
            <img src={features.featuresPagePartnersCommonApp} />
          </Col>
          <Col>
            <img src={features.featuresPagePartnersParchment} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Features;
