import React from "react";
import HomeMarquee from "./home/HomeMarquee";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ReactPlayer from "react-player";
import "./home/Home.css";
import Documents from "../img/CDocs.png";
import Mobile from "../img/features/mobile.png";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";
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
      <Container className="featuresPageContainer" fluid>
        <Row className="featuresPageHeader">
          <h1 className="featuresPageTitle">{this.state.data.featuresTitle}</h1>
          <div className="featuresImages d-flex">
            <div className="featureMobileImage">
              <img src={Mobile} />
            </div>
            <div className="featureDocumentsImage">
              <img className="" src={Documents} />
            </div>
          </div>
          <div className="headerBottomArc" />
        </Row>
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
