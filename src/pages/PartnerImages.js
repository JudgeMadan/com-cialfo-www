import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./home/Home.css";

class PartnerImages extends React.Component {
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
          <Col className="home-page-partner-image">
            <div className="partner-object-image-container">
              <img className="homePartnerImages" src={image} />
            </div>
          </Col>
        );
      });
    }

    return (
      <div className="home-partners-image-container">
        <Container className="home-partners-image-content home-partners-image-content-auto-margin">
          <Row className="imageObjectTitle pb-5">
            <h1 className="primary_font ">{this.props.title}</h1>
          </Row>
          <Row className="imageObjectRow">{imageObject}</Row>
        </Container>
      </div>
    );
  }
}
export default PartnerImages;
