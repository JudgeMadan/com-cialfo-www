import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./About.css";

class AboutByTheNumbers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const byTheNumbers = this.props.byTheNumbers;
    let byTheNumbersObject;

    if (byTheNumbers) {
      byTheNumbersObject = byTheNumbers.map(number => {
        return (
          <Col className="byTheNumbersObject" key={number.sys.id}>
            <Container className="byTheNumbersObjectContainer light-blue-background">
              <Row className="byTheNumbersObjectContent ">
                <img
                  src={number.fields.aboutPageNumbersObjectImg.fields.file.url}
                />
              </Row>
              <Row className="byTheNumbersObjectContent ">
                <h2 className="secondary_font aboutPageNumbersObjectSubtitle">
                  {number.fields.aboutPageNumbersObjectSubtitle}
                </h2>
              </Row>
            </Container>
          </Col>
        );
      });
    }

    return <Row>{byTheNumbersObject}</Row>;
  }
}

export default AboutByTheNumbers;
