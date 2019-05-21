import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./home/Home.css";

class MobilePartnerImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const images = this.props.partnerImages;
    let imageObject;

    if (images) {
      imageObject = images.map(image => {
        return (
          <Row className="home-page-partner-image center-in-row">
            <div className="partner-object-image-container">
              <img className="homePartnerImages" src={image} />
            </div>
          </Row>
        );
      });
    }

    return (
      <Container className="center-in-row mb-3">
        <Row className="imageObjectTitle pb-5">
          <h1 className="primary_font ">{this.props.title}</h1>
        </Row>
        <Col>{imageObject}</Col>
      </Container>
    );
  }
}
export default MobilePartnerImages;
