import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import MediaQuery from "react-responsive";
import * as contentful from "contentful";
import "./Home.css";

class HomePartnerImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const images = this.props.partnerImages;
    let imageObject;

    if (images) {
      imageObject = images.map(image => {
        return (
          <Col className="home-page-partner-image">
            <img className="homePartnerImages" src={image} />
          </Col>
        );
      });
    }

    return (
      <div className="home-partners-image-container">
        <Container className="home-partners-image-content">
          <Row className="imageObjectTitle">
            <h1 className="primary_font ">{this.props.title}</h1>
          </Row>
          <Row className="imageObjectRow">{imageObject}</Row>
        </Container>
      </div>
    );
  }
}
export default HomePartnerImages;
