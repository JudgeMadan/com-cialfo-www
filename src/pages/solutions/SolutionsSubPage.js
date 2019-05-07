import React from "react";
import HomeMarquee from "../home/HomeMarquee";
import * as contentful from "contentful";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import SolutionsHeader from "./SolutionsHeader";
import SolutionsRightSideText from "./SolutionsRightSideText";
import SolutionsLeftSideText from "./SolutionsLeftSideText";
import FeaturesSubfooter from "../features/FeaturesSubfooter";
class SolutionsSubPage extends React.Component {
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
      <Container className="homePageContainer">
        <SolutionsHeader />
        <div className="solutions-bottom-spacing" />
        <SolutionsRightSideText />
        <div className="solutions-bottom-spacing" />
        <FeaturesSubfooter />
        <div className="solutions-bottom-spacing" />
        <SolutionsLeftSideText />
        <div className="solutions-bottom-spacing" />
        <HomeMarquee />
      </Container>
    );
  }
}

export default SolutionsSubPage;
