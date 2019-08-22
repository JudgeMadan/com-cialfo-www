import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./home/Home.css";
import Documents from "../img/home/CDocs.png";
import ResearchImage from "../img/home/SchoolsOverview.png";
import ResearchImageUS from "../img/home/SchoolsOverview-us.png";
import Discover from "../img/home/Discover.png";
import Oval from "../img/Oval.svg";
import Line from "../img/Line.svg";
import LightBlueRectangle from "../img/LightBlueRectangle.svg";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
import PathToRegexp, { compile } from "path-to-regexp";
import HomeFeatureLeftSideText from "./sharedComponents/HomeFeatureLeftSideText"
import HomeFeatureRightSideText from "./sharedComponents/HomeFeatureRightSideText"
import DemoCallToAction from "./sharedComponents/DemoCallToAction"
import FeaturedVideo from "./sharedComponents/FeaturedVideo";
import { DataContext } from "../contexts/DataContext"
import FeatureTable from "./features/components/FeatureTable"

class Features extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      data: {},
      dataTableMain: {},
      dataTableSecondary: {}
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    // this.fetchFeatures().then(this.setFeatures);
    this.context.fetchEntries("featuresPage").then((response) => {
      let data = this.context.setContent(response, "featuresPage")
      this.setState({
        data: data
      })
    });
    this.context.fetchEntries("featureTable").then((response) => {
      this.setState({
        dataTableMain: this.context.setContent(response, "featureTableMain"),
        dataTableSecondary: this.context.setContent(response, "featureTableSecondary")
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
      this.context.fetchEntries("featuresPage").then((response) => {
        let data = this.context.setContent(response, "featuresPage")
        this.setState({
          data: data
        })
      });
      this.context.fetchEntries("featureTable").then((response) => {
        this.setState({
          dataTableMain: this.context.setContent(response, "featureTableMain"),
          dataTableSecondary: this.context.setContent(response, "featureTableSecondary")
        })
      });
    }
  }



  render() {
    return (
      <Container className="homePageContainer" fluid>
        <FeatureTable
          data={this.state.dataTableMain}
        />
        <FeaturedVideo />
        {/* FULL SCREEN TOP ROW */}
        <MediaQuery query="(min-device-width: 1224px)">
          <FeatureTable
            data={this.state.dataTableSecondary}
          />
          <Row className="schoolTestimonialsTitle">
            <h1 className="primary_font">
              {this.state.data.featurePageSchoolTestimonialsTitle}
            </h1>
          </Row>
          <Row className="homeMarquee mx-3">
            <HomeMarquee
              locale={this.props.locale}
              accessToken={this.props.accessToken}
              space={this.props.space}
              spaces={this.props.spaces}
              setSpace={this.props.setSpace}
              setAccessToken={this.props.setAccessToken}
              environment={this.props.environment}
            />
          </Row>
        </MediaQuery>
        <DemoCallToAction />
      </Container>
    );
  }
}

export default withRouter(Features);
