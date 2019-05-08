import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AboutPartners extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const partners = this.props.partners;
    // console.log(partners);
    let partnersObject;

    if (partners) {
      partnersObject = partners.map(partner => {
        return (
          <Col className="about-partners-columns" key={partner.sys.id}>
            <img
              className="flexible-image-width-100 max-width-200px"
              src={partner.fields.file.url}
            />
          </Col>
        );
      });
    }

    return <Row>{partnersObject}</Row>;
  }
}

export default AboutPartners;
