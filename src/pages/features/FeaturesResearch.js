import React from "react";
import Container from "react-bootstrap/Container";
import "./Features.css";
import FeaturesRightSideText from "./featuresSharedComponents/FeaturesRightSideText"
import FeaturesLeftSideText from "./featuresSharedComponents/FeaturesLeftSideText"
import FeaturesTitle from "./featuresSharedComponents/FeaturesTitle"
import { withRouter } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext"

class FeaturesResearch extends React.Component {
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
    this.context.fetchEntries("featuresResearchPage").then((response) => {
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
      this.context.fetchEntries("featuresResearchPage").then((response) => {
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
          title={this.state.data.researchTitle}
          heroImage={this.state.data.featuresResearchHero}
        />
        <FeaturesRightSideText
          image={this.state.data.researchInfoImg}
          title={this.state.data.researchInfoTitle}
          bullets={this.state.data.researchInfoBlurb}
        />
        <FeaturesLeftSideText
          image={this.state.data.researchTranscriptImg}
          title={this.state.data.researchTranscriptTitle}
          bullets={this.state.data.researchTranscriptBlurb}
        />
        <FeaturesRightSideText
          image={this.state.data.researchKnowledgeImg}
          title={this.state.data.researchKnowledgeTitle}
          bullets={this.state.data.researchKnowledgeBlurb}
        />
      </Container >
    );
  }
}
export default withRouter(FeaturesResearch);
