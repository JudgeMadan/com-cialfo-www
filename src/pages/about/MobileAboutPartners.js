import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class MobileAboutPartners extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const partners = this.props.partners;
    let partnersObject;

    if (partners) {
      partnersObject = partners.map(partner => {
        return (
          <Row className="mobile-aboutPartnerImagesRow" key={partner.sys.id}>
            <div classname="mobile-homePartnerImagesContainer">
              <img
                className="mobile-aboutPartnerImages"
                src={partner.fields.aboutPagePartners[0].fields.file.url}
              />
            </div>
          </Row>
        );
      });
    }

    return (
      <Container className="mobile-about-partners-container">
        {partnersObject}
      </Container>
    );
  }
}

export default MobileAboutPartners;
