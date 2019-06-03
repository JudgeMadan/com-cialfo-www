import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import "../getADemo/GetADemo.css";
import "../getADemo/GetADemo.css";

class GetInTouchContactArray extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const contactArray = this.props.contactArray;
    let contactArrayObject;

    if (contactArray) {
      contactArrayObject = contactArray.map(contact => {
        return (
          <Col
            xl={3}
            md={4}
            xs={6}
            className="contactArrayCol mb-5 px-3"
            key={contact.sys.id}
          >
            <Row className="contactArrayRow secondary_font">
              {contact.fields.header}
            </Row>
            {/* The <br /> looks weird on local but is needed on staging */}
            <br />
            <Row className="contactArrayRow secondary_font">
              {contact.fields.content}
            </Row>
          </Col>
        );
      });
    }

    return (
      <Container className="contactArray mx-5 mt-5">
        <Row>{contactArrayObject}</Row>
      </Container>
    );
  }
}

export default GetInTouchContactArray;
