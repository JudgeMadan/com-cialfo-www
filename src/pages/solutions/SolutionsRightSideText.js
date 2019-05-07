import React from "react";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./solutions.css";
import FeaturesBullets from "../features/FeaturesBullets";

class SolutionsRightSideText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // client = contentful.createClient({
  //   space: this.props.space,
  //   accessToken: this.props.accessToken
  // });

  // componentDidMount() {
  //   this.fetchFeatures().then(this.setFeatures);
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.locale !== this.props.locale) {
  //     this.fetchFeatures().then(this.setFeatures);
  //   }
  // }

  // fetchFeatures = () => {
  //   return this.client.getEntries({
  //     content_type: "featuresPage",
  //     locale: this.props.locale
  //   });
  // };

  // setFeatures = response => {
  //   const featureContent = response.items[0].fields;
  //   for (let key in featureContent) {
  //     if (typeof featureContent[key] === "string") {
  //       this.setState({
  //         [key]: featureContent[key]
  //       });
  //     } else if (Array.isArray(featureContent[key])) {
  //       this.setState({
  //         [key]: featureContent[key]
  //       });
  //     } else {
  //       this.setState({
  //         [key]: featureContent[key].fields.file.url
  //       });
  //     }
  //   }
  // };

  render() {
    return (
      <div>
        <Row>
          <Col className="featureImage">
            {/* <img src={this.state.researchInfoImg} /> */}
          </Col>
          <Col className="featureSubSectionTextAlign">
            <Container>
              <Row>
                <Col>
                  <h1 className="primary_font">
                    {this.state.researchInfoTitle}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FeaturesBullets
                    bullets={this.state.researchKnowledgeBlurb}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SolutionsRightSideText;
