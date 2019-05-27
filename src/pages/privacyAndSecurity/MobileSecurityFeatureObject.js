import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SecurityEllipse from "../../img/SecurityEllipse.svg";
import "./privacyAndSecurity.css";

class MobileSecurityFeatureObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const securityFeatures = this.props.securityFeatures;
    let securityFeaturesObjectRow;

    if (securityFeatures) {
      securityFeaturesObjectRow = securityFeatures.map((feature, index) => {
        return (
          <Container className="mobile-security-object-row pb-2">
            <img src={SecurityEllipse} />
            &nbsp; &nbsp;
            {feature}
          </Container>
        );
      });
    }

    return (
      <Container className="mobile-security-content-row-footer center-in-row">
        <Row className="mx-3">{securityFeaturesObjectRow}</Row>
      </Container>
    );
  }
}
export default MobileSecurityFeatureObject;
