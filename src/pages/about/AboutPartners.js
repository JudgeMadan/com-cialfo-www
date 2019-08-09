import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class AboutPartners extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const partners = this.props.partners;
    let partnersObject;

    if (partners) {
      console.log(partners)
      partnersObject = partners.map(partner => {
        return (
          <Col className="home-page-partner-image" key={partner}>
            <div className="partner-object-image-container">
              <img
                className="homePartnerImages"
                src={partner}
              />
            </div>
          </Col>
        );
      });
    }

    return (
      <div className="home-partners-image-container">
        <Container className="home-partners-image-content">
          <Row className="imageObjectRow">{partnersObject}</Row>
        </Container>
      </div>
    );
  }
}

export default AboutPartners;
