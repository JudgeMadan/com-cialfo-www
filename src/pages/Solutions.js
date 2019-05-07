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
import SolutionsHeader from "./solutions/SolutionsHeader";
import SolutionsRightSideText from "./solutions/SolutionsRightSideText";
import SolutionsLeftSideText from "./solutions/SolutionsLeftSideText";
import FeaturesSubfooter from "./features/FeaturesSubfooter";
import HomePartnerImages from "./home/HomePartnerImages";
class Solutions extends React.Component {
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
        <SolutionsHeader />
        <SolutionsRightSideText />
        <SolutionsLeftSideText />
        <SolutionsRightSideText />
        <div className="solutions-bottom-spacing" />
        <HomePartnerImages />
        <div className="solutions-bottom-spacing" />
        <FeaturesSubfooter />
      </Container>
    );
  }
}

export default Solutions;
