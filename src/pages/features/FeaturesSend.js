import React from "react";
import Container from "react-bootstrap/Container";
import "./Features.css";
import { withRouter } from "react-router-dom";
import FeaturesSendRightSideText from "./featuresSharedComponents/FeaturesSendRightSideText";
import FeaturesSendLeftSideText from "./featuresSharedComponents/FeaturesSendLeftSideText";
import FeaturesTitle from "./featuresSharedComponents/FeaturesTitle";
import DemoCallToAction from "../sharedComponents/DemoCallToAction";
import { DataContext } from "../../contexts/DataContext"

class FeaturesSend extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      data: {}
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.context.fetchEntries("featuresSendingPage").then((response) => {
      let data = this.context.setContent(response)
      this.setState({
        data: data
      })
    });
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
      this.context.fetchEntries("featuresSendingPage").then((response) => {
        let data = this.context.setContent(response)
        this.setState({
          data: data
        })
      });
    }
  }

  render() {
    return (
      <Container className="featuresSendPage" fluid={true}>
        <FeaturesTitle
          title={this.state.data.sendTitle}
          heroImage={this.state.data.featureSendHero}
        />
        <FeaturesSendRightSideText
          image={this.state.data.sendPortalImage}
          title={this.state.data.sendPortalTitle}
          bullets={this.state.data.sendPortalBlurb}
        />
        <FeaturesSendLeftSideText
          image={this.state.data.sendTranscriptImage}
          title={this.state.data.sendTranscriptTitle}
          bullets={this.state.data.sendTranscriptBlurb}
        />
        <DemoCallToAction />
      </Container >
    );
  }
}
export default withRouter(FeaturesSend);
