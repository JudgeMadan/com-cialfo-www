import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AboutPartners extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const partners = this.props.partners;
    let partnersObject;

    if (partners) {
      partnersObject = partners.map(partner => {
        return (
          <Col key={partner.sys.id}>
            <img src={partner.fields.aboutPagePartners[0].fields.file.url} />
          </Col>
        );
      });
    }

    return <Row>{partnersObject}</Row>;
  }
}

export default AboutPartners;
