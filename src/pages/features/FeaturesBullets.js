import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Features.css";
import pointer from "../features/Pointer.png";

class FeaturesBullets extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bullets = this.props.bullets;
    let bulletsObject;

    if (bullets) {
      bulletsObject = bullets.map(bullet => {
        return (
          <div className="bullet_point">
            <img src={pointer} />
            <span className="secondary_font"> {bullet.fields.bulletPoint}</span>
          </div>
        );
      });
    }

    return <Row>{bulletsObject}</Row>;
  }
}
export default FeaturesBullets;

// const images = this.props.partnerImages;
// let imageObject;

// if (images) {
//   imageObject = images.map(image => {
//     return (
//       <Col className="homePartnerImages">
//         <img className="homePartnerImages" src={image} />
//       </Col>
//     );
//   });
// }

// return (
//   <div>
//     <Row>{imageObject}</Row>
//   </div>
// );
