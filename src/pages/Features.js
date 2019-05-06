import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./home/Home.css";
import Documents from "../img/home/CDocs.svg";
import ResearchImage from "../img/home/SchoolsOverview.svg";
import Reports from "../img/home/Reports.svg";
import Oval from "../img/Oval.svg";
import Line from "../img/Line.svg";
class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  client = contentful.createClient({
    space: this.props.space,
    accessToken: this.props.accessToken
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
    for (let key in featureContent) {
      if (typeof featureContent[key] === "string") {
        this.setState({
          [key]: featureContent[key]
        });
      } else if (Array.isArray(featureContent[key])) {
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
    return (
      <Container className="homePageContainer">
        <Row className="titleContainer">
          <h1 className="primary_font">{this.state.featuresTitle}</h1>
        </Row>
        <Row className="featuresVideoEmbed">
          <div>
            <img className="oval" src={Oval} />
            <img className="line" src={Line} />
            <ReactPlayer
              className="video"
              width="800px"
              height="488px"
              url={this.state.featuresVideo}
            />
          </div>
        </Row>
        <Row className="homePageSchoolTestimonialsTitle">
          <h1 className="primary_font">
            {this.state.homePageSchoolTestimonialsTitle}
          </h1>
        </Row>
        <Row className="homeMarquee">
          <HomeMarquee locale={this.props.locale} />
        </Row>
        <Row className="featureRows">
          <Col className="homePageFeaturesImage homePageFeaturesImageBackground">
            <img className="homePageImg" src={Documents} />
          </Col>
          <Col className="homePageFeaturesText">
            <div className="homePageFeaturesRightSideTextObject">
              <Row>
                <h1 className="primary_font">
                  {this.state.featurePageFeaturesSendDocumentTitle}
                </h1>
              </Row>
              <Row>
                <p className="secondary_font">
                  {this.state.featurePageFeaturesSendDocumentBlurb}
                </p>
              </Row>
              <Row>
                <Link
                  className="homeFeatureLink homePageFeaturesSendDocumentLinkText"
                  to="/features/send"
                >
                  {this.state.featurePageFeaturesSendDocumentLinkText}
                </Link>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="featureRows">
          <Col className="homePageFeaturesText">
            <div className="homePageFeaturesLeftSideTextObject">
              <Row>
                <h1 className="primary_font">
                  {this.state.featurePageFeaturesLeverageTitle}
                </h1>
              </Row>
              <Row>
                <p className="secondary_font">
                  {this.state.featurePageFeaturesLeverageBlurb}
                </p>
              </Row>
              <Row>
                <Link
                  className="homeFeatureLink homePageFeaturesLeverageLinkText"
                  to="/features/research"
                >
                  {this.state.featurePageFeaturesLeverageLinkText}
                </Link>
              </Row>
            </div>
          </Col>
          <Col className="homePageFeaturesImage homePageFeaturesImageBackgroundReverse">
            <img className="homePageImg" src={ResearchImage} />
          </Col>
        </Row>
        <Row className="featureRows">
          <Col className="homePageFeaturesImage homePageFeaturesImageBackground">
            <img className="homePageImg" src={Reports} />
          </Col>
          <Col className="homePageFeaturesText">
            <div className="homePageFeaturesRightSideTextObject">
              <Row>
                <h1 className="primary_font">
                  {this.state.featurePageFeaturesDiscoverTitle}
                </h1>
              </Row>
              <Row>
                <p className="secondary_font">
                  {this.state.featurePageFeaturesDiscoverBlurb}
                </p>
              </Row>
              <Row>
                <Link
                  className="homeFeatureLink homePageFeaturesDiscoverLinkText"
                  to="/features/documents"
                >
                  {this.state.featurePageFeaturesDiscoverLinkText}
                </Link>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Features;
