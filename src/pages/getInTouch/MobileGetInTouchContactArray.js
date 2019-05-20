import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import "../getADemo/GetADemo.css";
import "../getADemo/GetADemo.css";

class MobileGetInTouchContactArray extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const contactArray = this.props.contactArray;
    let contactArrayObject;

    if (contactArray) {
      contactArrayObject = contactArray.map(contact => {
        return (
          <Row key={contact.sys.id}>
            <Col className=" secondary_font">{contact.fields.header}</Col>
            {/* The <br /> looks weird on local but is needed on staging */}
            <Col xs={8} className=" secondary_font">
              {contact.fields.content}
            </Col>
          </Row>
        );
      });
    }

    return (
      <Container className="mobile-contactArray">
        {contactArrayObject}
      </Container>
    );
  }
}

export default MobileGetInTouchContactArray;
