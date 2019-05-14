import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SecurityEllipse from "../../img/SecurityEllipse.svg";
import "./privacyAndSecurity.css";

class SecurityFeatureObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const securityFeatures = this.props.securityFeatures;
    let securityFeaturesObjectLeftRow;
    let securityFeaturesObjectRightRow;

    if (securityFeatures) {
      securityFeaturesObjectLeftRow = securityFeatures.map((feature, index) => {
        if (index < securityFeatures.length / 2) {
          return (
            <Row className="security-object-row pb-2">
              <img src={SecurityEllipse} />
              &nbsp; &nbsp;
              {feature}
            </Row>
          );
        }
      });
      securityFeaturesObjectRightRow = securityFeatures.map(
        (feature, index) => {
          if (index > securityFeatures.length / 2 - 1) {
            return (
              <Row className="security-object-row pb-2">
                <img src={SecurityEllipse} />
                &nbsp; &nbsp;
                {feature}
              </Row>
            );
          }
        }
      );
    }

    return (
      <Row className="security-object-col-container security-content-row-footer pb-5">
        <div>{securityFeaturesObjectLeftRow}</div>
        <div>{securityFeaturesObjectRightRow}</div>
      </Row>
    );
  }
}
export default SecurityFeatureObject;
