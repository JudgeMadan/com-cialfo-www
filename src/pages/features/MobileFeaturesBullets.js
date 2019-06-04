import React from "react";
import Row from "react-bootstrap/Row";
import "./Features.css";
import Pointer from "../../img/Pointer.svg";
class MobileFeaturesBullets extends React.Component {
  render() {
    const bullets = this.props.bullets;
    let bulletsObject;

    if (bullets) {
      console.log(bullets);
      bulletsObject = bullets.map(bullet => {
        return (
          <div className="bullet_point no-x-axis-margin">
            <img src={Pointer} />
            <span className="secondary_font"> {bullet.fields.bulletPoint}</span>
          </div>
        );
      });
    }

    return <Row>{bulletsObject}</Row>;
  }
}
export default MobileFeaturesBullets;
