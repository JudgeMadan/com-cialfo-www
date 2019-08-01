import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import "./Features.css";
import FeaturesSubfooter from "./featuresSharedComponents/FeaturesSubfooter";
import FeaturesBullets from "./featuresSharedComponents/FeaturesBullets";
import MobileFeaturesBullets from "./featuresSharedComponents/MobileFeaturesBullets";
import Oval from "../../img/Oval.svg";
import Line from "../../img/Line.svg";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import MediaQuery from "react-responsive";
import FeaturesSubPage from "./featuresSharedComponents/FeaturesSubPage"
import FeaturesRightSideText from "./featuresSharedComponents/FeaturesRightSideText"
import FeaturesLeftSideText from "./featuresSharedComponents/FeaturesLeftSideText"
import FeaturesTitle from "./featuresSharedComponents/FeaturesTitle"
import { withRouter } from "react-router-dom";
class FeaturesResearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  setSpace = () => {
    return this.props.setSpace(this.props.match.params.space);
  };

  setAccessToken = () => {
    return this.props.setAccessToken(this.props.match.params.space);
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken(),
    environment: this.props.environment
  });

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.fetchFeaturesResearchPage().then(this.setFeaturesResearchPage);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.fetchFeaturesResearchPage().then(this.setFeaturesResearchPage);
    }
  }

  fetchFeaturesResearchPage = () => {
    return this.client.getEntries({
      content_type: "featuresResearchPage",
      locale: this.props.match.params.locale
    });
  };

  setFeaturesResearchPage = response => {
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
    const space = this.props.match.params.space;
    return (
      <Container className="featuresSendPage" fluid={true}>
        <FeaturesTitle
          setSpace={this.setSpace}
          setAccessToken={this.setAccessToken}
          title={this.state.researchTitle}
          heroImage={this.state.featuresResearchHero}
        />
        <FeaturesRightSideText
          setSpace={this.setSpace}
          setAccessToken={this.setAccessToken}
          image={this.state.researchInfoImg}
          title={this.state.researchInfoTitle}
          bullets={this.state.researchInfoBlurb}
        />
        <FeaturesLeftSideText
          setSpace={this.setSpace}
          setAccessToken={this.setAccessToken}
          image={this.state.researchTranscriptImg}
          title={this.state.researchTranscriptTitle}
          bullets={this.state.researchTranscriptBlurb}
        />
        <FeaturesRightSideText
          setSpace={this.setSpace}
          setAccessToken={this.setAccessToken}
          image={this.state.researchKnowledgeImg}
          title={this.state.researchKnowledgeTitle}
          bullets={this.state.researchKnowledgeBlurb}
        />
      </Container >
    );
  }
}
export default withRouter(FeaturesResearch);

