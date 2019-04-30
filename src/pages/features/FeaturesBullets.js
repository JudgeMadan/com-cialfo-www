import React from "react";
import Row from "react-bootstrap/Row";
import "./Features.css";
import pointer from "../features/Pointer.png";

class FeaturesBullets extends React.Component {
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
