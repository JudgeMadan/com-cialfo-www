import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SecurityEllipse from "../../img/SecurityEllipse.svg";

class SecurityFeatureObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.securityFeatures);
    const securityFeatures = this.props.securityFeatures;
    let securityFeaturesObjectLeftRow;
    let securityFeaturesObjectRightRow;

    if (securityFeatures) {
      securityFeaturesObjectLeftRow = securityFeatures.map((feature, index) => {
        if (index < 4) {
          return (
            <Row>
              <img src={SecurityEllipse} />
              &nbsp; &nbsp;
              {feature}
            </Row>
          );
        }
      });
      securityFeaturesObjectRightRow = securityFeatures.map(
        (feature, index) => {
          if (index > 3) {
            return (
              <Row>
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
      <Row>
        <Col>{securityFeaturesObjectLeftRow}</Col>
        <Col>{securityFeaturesObjectRightRow}</Col>
      </Row>
    );
  }
}
export default SecurityFeatureObject;
