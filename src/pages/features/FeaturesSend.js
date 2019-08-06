import React from "react";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import "./Features.css";
import FeaturesSubfooter from "./featuresSharedComponents/FeaturesSubfooter";
import MediaQuery from "react-responsive";
import Oval from "../../img/Oval.svg";
import Line from "../../img/Line.svg";
import PartnerImages from "../PartnerImages";
import MobilePartnerImages from "../MobilePartnerImages";
import Pointer from "../../img/Pointer.svg";
import ThinLightBlueRectangle from "../../img/ThinLightBlueRectangle.svg";
import { withRouter } from "react-router-dom";
import FeaturesBullets from "./featuresSharedComponents/FeaturesBullets";
import FeaturesSendBullets from "./featuresSharedComponents/FeaturesSendBullets";
import MobileFeaturesSendBullets from "./featuresSharedComponents/MobileFeaturesSendBullets";
import FeaturesSendRightSideText from "./featuresSharedComponents/FeaturesSendRightSideText"
import FeaturesSendLeftSideText from "./featuresSharedComponents/FeaturesSendLeftSideText"
import FeaturesTitle from "./featuresSharedComponents/FeaturesTitle"

class FeaturesSend extends React.Component {
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
    this.fetchFeaturesSendingPage().then(this.setFeaturesSendingPage);
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
      this.fetchFeaturesSendingPage().then(this.setFeaturesSendingPage);
    }
  }

  fetchFeaturesSendingPage = () => {
    return this.client.getEntries({
      content_type: "featuresSendingPage",
      locale: this.props.match.params.locale
    });
  };

  setFeaturesSendingPage = response => {
    const sendingPageContent = response.items[0].fields;
    for (let key in sendingPageContent) {
      if (typeof sendingPageContent[key] === "string") {
        this.setState({
          [key]: sendingPageContent[key]
        });
      } else if (Array.isArray(sendingPageContent[key])) {
        this.setState({
          [key]: sendingPageContent[key].map(test => test.fields.bulletPoint)
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
          title={this.state.sendTitle}
          heroImage={this.state.featureSendHero}
        />
        <FeaturesSendRightSideText
          setSpace={this.setSpace}
          setAccessToken={this.setAccessToken}
          image={this.state.sendPortalImage}
          title={this.state.sendPortalTitle}
          bullets={this.state.sendPortalBlurb}
        />
        <FeaturesSendLeftSideText
          setSpace={this.setSpace}
          setAccessToken={this.setAccessToken}
          image={this.state.sendTranscriptImage}
          title={this.state.sendTranscriptTitle}
          bullets={this.state.sendTranscriptBlurb}
        />
      </Container >

    );
  }
}
export default withRouter(FeaturesSend);
