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
          <Col
            className="byTheNumbersObject"
            id="testContentRed"
            key={number.sys.id}
          >
            <Container id="testContentBlue">
              <h1 className="primary_font">
                {number.fields.aboutPageNumbersObjectTitle}
              </h1>
              <h2 className="secondary_font">
                {number.fields.aboutPageNumbersObjectSubtitle}
              </h2>
            </Container>
          </Col>
        );
      });
    }

    return <Row>{byTheNumbersObject}</Row>;
  }
}

export default AboutByTheNumbers;
