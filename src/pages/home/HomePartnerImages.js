import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

class HomePartnerImages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const images = this.props.partnerImages;
    let imageObject;

    if (images) {
      imageObject = images.map(image => {
        return (
          <Col className="homePartnerImages">
            <img className="homePartnerImages" src={image} />
          </Col>
        );
      });
    }

    return (
      <div>
        <Row>{imageObject}</Row>
      </div>
    );
  }
}
export default HomePartnerImages;
