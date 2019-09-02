import React from "react";
import Container from "react-bootstrap/Container";
import "./Features.css";
import FeaturesRightSideText from "./featuresSharedComponents/FeaturesRightSideText"
import FeaturesLeftSideText from "./featuresSharedComponents/FeaturesLeftSideText"
import FeaturesTitle from "./featuresSharedComponents/FeaturesTitle"
import { withRouter } from "react-router-dom";
import DemoCallToAction from "../sharedComponents/DemoCallToAction";
import { DataContext } from "../../contexts/DataContext"

class FeaturesDocuments extends React.Component {
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
    this.context.fetchEntries("featuresDocuments").then((response) => {
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
      this.context.fetchEntries("featuresDocuments").then((response) => {
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
          title={this.state.data.documentsTitle}
          heroImage={this.state.data.featuresResearchHero}
        />
        <FeaturesRightSideText
          image={this.state.data.documentsExploreImage}
          title={this.state.data.documentsExploreTitle}
          bullets={this.state.data.documentsExploreBlurb}
        />
        <FeaturesLeftSideText
          image={this.state.data.documentsTranscriptImage}
          title={this.state.data.documentsTranscriptTitle}
          bullets={this.state.data.documentsTranscriptBlurb}
        />
        <DemoCallToAction />
      </Container >
    );
  }
}
export default withRouter(FeaturesDocuments);
